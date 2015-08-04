
ELM_SOURCE = src/TodoMVC.elm
ELM_BUILD = js/elm.js

###

.PHONY: all new open guard clean clean-build clean-all

all: $(ELM_BUILD)

new: clean-build all

$(ELM_BUILD):
	elm make --yes --output $(ELM_BUILD) $(ELM_SOURCE)

open:
	# xdg-open "http://localhost:63342/todomvc/todomvc-elmfire/work/" 2>/dev/null
	xdg-open index.html 2>/dev/null

guard: all
	bin/guard

clean:
	rm -rf elm-stuff

clean-build:
	rm -f $(ELM_BUILD)
	rm -rf elm-stuff/build-artifacts

clean-all: clean-build clean
