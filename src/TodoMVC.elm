module TodoMVC where

{-| TodoMVC implemented in Elm
    using Firebase for storage

    2015 Thomas Weiser
         based on work by Evan Czaplicki and the TodoMVC project

    - [Github Repo](https://github.com/ThomasWeiser/todomvc-elmfire)
    - [Original Elm Implementation by Evan Czaplicki](https://github.com/evancz/elm-todomvc)
    - [ElmFire](https://github.com/ThomasWeiser/elmfire)
    - [Elm Language](http://elm-lang.org/)
    - [TodoMVC Project](http://todomvc.com/)
-}

import Result
import Dict exposing (Dict)
import Html exposing (..)
import Html.Attributes exposing (..)
import Html.Events exposing (..)
import Html.Lazy exposing (lazy, lazy2, lazy3)
import Json.Decode as JD exposing ((:=))
import Json.Encode as JE
import Signal exposing (Mailbox, Address, mailbox, message)
import Task exposing (Task, andThen)
import Effects exposing (Effects, Never)
import StartApp

import ElmFire

-----------------------------------------------------------------------

-- Configuration

-- URL of the Firebase to use
firebase_foreign = "https://todomvc-angular.firebaseio.com/todos"

-- This app uses the same data format as firebase-angular implementation.
-- So you could use also test with their Firebase
firebase_test = "https://elmfire-todomvc.firebaseio.com/todos"

-- But lets use our own
firebaseUrl = firebase_test

-----------------------------------------------------------------------

config : StartApp.Config Model Action
config =
  { init = (initialModel, initialEffect)
  , update = updateState
  , view = view
  , inputs = [Signal.map FromServer serverInput.signal]
  }

app = StartApp.start config

port runEffects : Signal (Task Never ())
port runEffects = app.tasks

main : Signal Html
main = app.html

-----------------------------------------------------------------------

-- The model comprises two parts:
--   - Shared persistent state: A list of items together with their ids
--   - Local State: Filtering and editing

type alias Model =
  { items: Dict Id Item
  , filter: Filter
  , addField: Content
  , editingItem: EditingItem
  }

type alias Id = String
type alias Content = String
type alias Item =
  { title: Content
  , completed: Bool
  }

type Filter = All | Active | Completed

type alias EditingItem = Maybe (Id, Content)

initialModel : Model
initialModel =
  { items = Dict.empty
  , filter = All
  , addField = ""
  , editingItem = Nothing
  }

type Action
  = FromGui GuiEvent
  | FromServer ServerEvent
  | FromEffect EffectEvent

-----------------------------------------------------------------------

-- Events originating from the user interacting with the html page

type GuiEvent
  = NoGuiEvent
    -- operations on the item list
  | AddItem
  | UpdateItem Id
  | DeleteItem Id
  | DeleteCompletedItems
  | CheckItem Id Bool
  | CheckAllItems Bool
    -- operating on local state
  | EditExistingItem EditingItem
  | EditAddField Content
  | SetFilter Filter

type alias GuiAddress = Address GuiEvent

-----------------------------------------------------------------------

-- Events originating from firebase responses

type ServerEvent
  = NoServerEvent
  | Added (Id, Item)
  | Changed (Id, Item)
  | Removed Id

serverInput : Mailbox ServerEvent
serverInput = mailbox NoServerEvent

-- Events originating from effect (mostly firebase commands)
-- Actually there are not meanigful return values, so we have only a single value here.

type EffectEvent
  = NoEffectEvent

effectInput : Mailbox EffectEvent
effectInput = mailbox NoEffectEvent

-----------------------------------------------------------------------

-- Subscribe to firebase events: adding, removing and changing items

initialEffect : Effects Action
initialEffect =
  let
    snap2task : ((Id, Item) -> ServerEvent) -> ElmFire.Snapshot -> Task () ()
    snap2task eventOp =
      ( \snapshot ->
        case decodeItem snapshot.value of
          Just item ->
            Signal.send
              serverInput.address
              (eventOp (snapshot.key, item))
          Nothing -> Task.fail ()
      )
    doNothing = \_ -> Task.succeed ()
    loc = (ElmFire.fromUrl firebaseUrl)
  in
    kickOff
    ( ElmFire.subscribe
        (snap2task Added) doNothing (ElmFire.childAdded ElmFire.noOrder) loc
      `andThen`
      \_ -> ElmFire.subscribe
        (snap2task Changed) doNothing (ElmFire.childChanged ElmFire.noOrder) loc
      `andThen`
      \_ -> ElmFire.subscribe
        (snap2task (\(id, _) -> Removed id)) doNothing (ElmFire.childRemoved ElmFire.noOrder) loc
      `andThen`
      \_ -> Task.succeed ()
    )

-----------------------------------------------------------------------

decodeItem : JD.Value -> Maybe Item
decodeItem value =
  JD.decodeValue decoderItem value |> Result.toMaybe

decoderItem : JD.Decoder Item
decoderItem =
  ( JD.object2 Item
      ("title" := JD.string)
      ("completed" := JD.bool)
  )

-----------------------------------------------------------------------

-- Process gui events and server events yielding model updates and effects

{- Map any task to an effect, discarding any direct result or error value -}
kickOff : Task x a -> Effects Action
kickOff =
  Task.toMaybe >> Task.map (always (FromEffect NoEffectEvent)) >> Effects.task

updateState : Action -> Model -> (Model, Effects Action)
updateState action model =
  case action of

    FromEffect _ ->
      ( model
      , Effects.none
      )

    FromServer (Added (id, item)) ->
      ( { model | items <- Dict.insert id item model.items }
      , Effects.none
      )

    FromServer (Changed (id, item)) ->
      ( { model | items <- Dict.insert id item model.items }
      , Effects.none
      )

    FromServer (Removed id) ->
      ( { model | items <- Dict.remove id model.items }
      , Effects.none
      )

    FromGui (AddItem) ->
      ( { model | addField <- "" }
      , if model.addField == ""
        then Effects.none
        else
          kickOff <|
            ElmFire.set
              ( JE.object
                  [ ("title", JE.string model.addField)
                  , ("completed", JE.bool False)
                  ]
              )
              ( ElmFire.fromUrl firebaseUrl |> ElmFire.push )
      )

    FromGui (UpdateItem id) ->
      ( { model | editingItem <- Nothing }
      , case model.editingItem of
          Just (id1, title) ->
            if (id == id1)
            then
              kickOff <|
                if title == ""
                then
                  ElmFire.remove
                    ( ElmFire.fromUrl firebaseUrl |> ElmFire.sub id )
                else
                  ElmFire.update
                    ( JE.object [ ("title", JE.string title) ] )
                    ( ElmFire.fromUrl firebaseUrl |> ElmFire.sub id )
            else Effects.none
          _ -> Effects.none
      )

    FromGui (DeleteItem id) ->
      ( model
      , kickOff <|
          ElmFire.remove
            ( ElmFire.fromUrl firebaseUrl |> ElmFire.sub id )
      )

    FromGui (DeleteCompletedItems) ->
      ( model
      , Effects.batch <|
        List.filterMap
          ( \(key, itemFromModel) ->
            if itemFromModel.completed
            then
              Just <| kickOff <| ElmFire.transaction
                ( \maybeItem ->
                  case maybeItem of
                    Just itemJson ->
                      case decodeItem itemJson of
                        Just itemFromServer ->
                          if itemFromServer.completed
                          then ElmFire.Remove
                          else ElmFire.Abort
                        Nothing ->
                          ElmFire.Abort
                    Nothing ->
                      ElmFire.Abort
                )
                ( ElmFire.fromUrl firebaseUrl |> ElmFire.sub key)
                True
            else Nothing
          )
          (Dict.toList model.items)
      )

    FromGui (CheckItem id completed) ->
      ( model
      , kickOff <|
          ElmFire.update
            ( JE.object [ ("completed", JE.bool completed) ] )
            ( ElmFire.fromUrl firebaseUrl |> ElmFire.sub id )
      )

    FromGui (CheckAllItems completed) ->
      ( model
      , Effects.batch <|
        List.map
          ( \key ->
            kickOff <|
              ElmFire.transaction
                ( \maybeItem ->
                  case maybeItem of
                    Just itemJson ->
                      case decodeItem itemJson of
                        Just item ->
                          ElmFire.Set
                            ( JE.object
                                [ ("title", JE.string item.title)
                                , ("completed", JE.bool completed)
                                ]
                            )
                        Nothing ->
                          ElmFire.Abort
                    Nothing ->
                      ElmFire.Abort
                )
                ( ElmFire.fromUrl firebaseUrl |> ElmFire.sub key)
                True
          )
          (Dict.keys model.items)
      )

    FromGui (EditExistingItem e) ->
      ( { model | editingItem <- e }
      , case e of
          Just (id, _) ->
            kickOff <| Signal.send focus.address id
          _ -> Effects.none
      )

    FromGui (EditAddField content) ->
      ( { model | addField <- content }
      , Effects.none
      )

    FromGui (SetFilter filter) ->
      ( { model | filter <- filter }
      , Effects.none
      )

    _ ->
      ( model
      , Effects.none
      )

-----------------------------------------------------------------------

-- Pre-calculate some values derived from model
-- for more efficient view code

type alias AugModel = {
  itemList: List (Id, Item),
  count: { total: Int, completed: Int }
}

augment : Model -> AugModel
augment model =
  let
    itemList = model.items |> Dict.toList
    (itemsTotal, itemsCompleted) =
      List.foldl
        (\(_, item) (total, completed) ->
          (total + 1, completed + if item.completed then 1 else 0)
        )
        (0, 0)
        itemList
  in
    {
      itemList = itemList,
      count = { total = itemsTotal, completed = itemsCompleted }
    }

-----------------------------------------------------------------------

view : Address Action -> Model -> Html
view actionAddress model =
  let
    augModel = augment model
    guiAddress = Signal.forwardTo actionAddress FromGui
  in
    div []
      [ section [ class "todoapp" ]
          [ lazy2 viewEntry guiAddress model.addField
          , lazy3 viewItemList guiAddress model augModel
          , lazy3 viewControls guiAddress model augModel
          ]
      , viewInfoFooter guiAddress
      ]

viewEntry : GuiAddress -> Content -> Html
viewEntry guiAddress content =
  header [ class "header" ]
    [ h1 [] [ text "todos" ]
    , input
        ( [ class "new-todo"
          , placeholder "What needs to be done?"
          , autofocus True
          , value content
          , on "input" targetValue (message guiAddress << EditAddField)
          , onEnter guiAddress AddItem
          ]
        )
        []
    ]

viewItemList : GuiAddress -> Model -> AugModel -> Html
viewItemList guiAddress model augModel =
  let
    visible = True
    allCompleted = augModel.count.total == augModel.count.completed
    isVisibleItem (_, item) =
      case model.filter of
        All -> True
        Active -> not item.completed
        Completed -> item.completed
    visibleItemList = List.filter isVisibleItem augModel.itemList
  in
    section
      [ class "main"
      , showBlock <| not <| List.isEmpty visibleItemList
      ]
      [ input
          [ id "toggle-all"
          , class "toggle-all"
          , type' "checkbox"
          , checked allCompleted
          , onClick guiAddress (CheckAllItems (not allCompleted))
          ] []
      , label
          [ for "toggle-all" ]
          [ text "Mark all as complete" ]
      , ul
          [ class "todo-list" ]
          ( List.map (viewItem guiAddress model.editingItem) visibleItemList )
      ]

viewItem : GuiAddress -> EditingItem -> (Id, Item) -> Html
viewItem guiAddress editingItem (id, item) =
  let
    isEditing = case editingItem of
      Just (id1, v) -> if id == id1 then (True, v) else (False, "")
      _ -> (False, "")
  in
    li
      [ classList
          [ ("completed", item.completed)
          , ("editing", fst isEditing)
          ]
      , key id
      ]
      [ div
          [ class "view" ]
          [ input
              [ class "toggle"
              , type' "checkbox"
              , checked item.completed
              , onClick guiAddress (CheckItem id (not item.completed))
              ]
              []
          , label
              [ onDoubleClick guiAddress (EditExistingItem (Just (id, item.title))) ]
              [ text item.title ]
          , button
              [ class "destroy"
              , onClick guiAddress (DeleteItem id)
              ]
              []
          ]
      , input
          ( [ class "edit"
            , Html.Attributes.id ("todo-" ++ id)
            , value (if fst isEditing then snd isEditing else "")
            , on "input" targetValue
                (\val -> message guiAddress (EditExistingItem (Just (id, val))))
            , onBlur guiAddress (UpdateItem id)
            , onEnter guiAddress (UpdateItem id)
            ]
          )
          []
      ]


viewControls : GuiAddress -> Model -> AugModel -> Html
viewControls guiAddress model augModel =
  let
    countCompleted = augModel.count.completed
    countLeft = augModel.count.total - augModel.count.completed
    itemNoun = if countLeft == 1 then " item" else " items"
    visible = True
  in
  footer
    [ class "footer"
    , showBlock visible
    ]
    [ span
        [ class "todo-count" ]
        [ strong [] [ text (toString countLeft) ]
        , text (itemNoun ++ " left")
        ]
    , ul
        [ class "filters" ]
        [ li
            [ onClick guiAddress (SetFilter All) ]
            [ a [ href "#/", classList [("selected", model.filter == All)] ]
                [ text "All" ]
            , text " "
            ]
        , li
            [ onClick guiAddress (SetFilter Active) ]
            [ a [ href "#/active", classList [("selected", model.filter == Active)] ]
                [ text "Active" ]
            , text " "
            ]
        , li
            [ onClick guiAddress (SetFilter Completed) ]
            [ a [ href "#/completed", classList [("selected", model.filter == Completed)] ]
                [ text "Completed" ]
            ]
        ]
    , button
        [ class "clear-completed"
        , hidden (countCompleted == 0)
        , onClick guiAddress DeleteCompletedItems
        ]
        [ text ("Clear completed") ]
    ]

viewInfoFooter : GuiAddress -> Html
viewInfoFooter guiAddress =
  footer [ class "info" ]
    [ p [] [ text "Double-click to edit a todo" ]
    , p [] [ text "Created by "
           , a [ href "https://github.com/evancz" ] [ text "Evan Czaplicki" ]
           , text " and "
           , a [ href "https://github.com/ThomasWeiser" ] [ text "Thomas Weiser" ]
           ]
    , p [] [ text "Part of "
           , a [ href "http://todomvc.com" ] [ text "TodoMVC" ]
           ]
    , p [] [ a [ href "https://github.com/ThomasWeiser/todomvc-elmfire" ]
               [ text "Source code at GitHub" ]
           ]
    ]

-----------------------------------------------------------------------

-- View helper functions

onEnter : Address a -> a -> Attribute
onEnter address value =
  let
    is13 : Int -> Result String ()
    is13 code =
      if code == 13 then Ok () else Err "not the right key code"
  in
    on "keydown"
      (JD.customDecoder keyCode is13)
      (\_ -> message address value)

showBlock : Bool -> Attribute
showBlock visible =
  style [ ("display", if visible then "block" else "none") ]

-----------------------------------------------------------------------

-- Use auxiliary JS code to set the focus to double-clicked input fields

focus : Mailbox Id
focus = mailbox ""

port runFocus : Signal Id
port runFocus = Signal.map ((++) "#todo-") focus.signal

-----------------------------------------------------------------------
