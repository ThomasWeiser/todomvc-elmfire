# TodoMVC in Elm + ElmFire • [Demo](http://thomasweiser.github.io/todomvc-elmfire/)

[TodoMVC](http://todomvc.com/)
implemented in
[Elm](http://elm-lang.org/),
extending [Evan Czaplicki's](https://twitter.com/czaplic)
[version](https://github.com/evancz/elm-todomvc),
using [Firebase](https://www.firebase.com/)
via [ElmFire](https://github.com/ThomasWeiser/elmfire)
for storage and real-time collaboration.

## Build Instructions

This app needs the Elm plattform version 15 or 15.1. Compile with:

    elm make --yes --output js/elm.js src/TodoMVC.elm
    
Then open `index.html` in your browser. The app should connect
to the shared Firebase and retrieve the current list of items.

Alternatively use the enclosed `Makefile` on Unix-like machines:

    make all open
    
As [ElmFire](https://github.com/ThomasWeiser/elmfire)
is not yet available from the official Elm package catalog,
a copy of it's source is currently included.

## Architectural Overview

The app complies with [The Elm Architecture](https://github.com/evancz/elm-architecture-tutorial/),
including [Effects](http://package.elm-lang.org/packages/evancz/elm-effects/latest) to store the content to a Firebase.

A sketch of the data flow:

- Inputs are coming from
    - Firebase query results
    - user interaction
- The `model` comprises two parts
    - shared persistent state (list of items)
    - local state (filter settings, intermediate edit state)
- An `update` function takes an input event and the current model, returning
  a new model and possibly an effect, i.e. a task to change the Firebase data.
- A `view` function renders the current model as HTML

Please note that content changes made by the user always flow through the Firebase layer.
From there they a passed down to the new model.
This utilizes the fact that the Firebase library immediately reflects local writes
without waiting for a server round trip.

Firebase queues up write operations during a network outage.
So the app will work offline and will catch up after going online again.

For adding new items the app uses Firebase's
[*push* operation](https://www.firebase.com/docs/web/api/firebase/push.html),
which generates chronologically sorted unique ids.
The model uses a dictionary
to map these ids to the items' payload.

## Future Work

- ElmFire will provide a means for [auto syncing a Dict](https://github.com/ThomasWeiser/elmfire/tree/dict) with a Firebase object. Use it.
- Explore architectural variations
    - Componentize the model: split it into a shared part and a local part
      where the local part depends on the shared part but the other way round.
- Possibly structure the code into components, as outlined in [The Elm Architecture](https://github.com/evancz/elm-architecture-tutorial/).
