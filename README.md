# Pioneer DDJ-S1 Mapping for Mixxx

As the title states, this is a mapping for the Pioneer DDJ-S1 controller for the FOSS/Open Source DJ Software [Mixxx](https://mixxx.org). Currently this mapping is not complete, some things work, quite some not.


## Current state
- Jogwheels work, probably need some fine tuning
  - not working is the vinyl mode and vinyl adjust. I think mixxx doesn't support vinyl mode??
  - scratching doesn't feel too good, for beatmatching it's fine
  - shift + turning jogwheel for quick "scrolling" through track is not implemented yet
- eq/volume/cue fully working
  - crossfader is not implemented, should be easy (also crossfader assignment)
- hot cues are not implemented yet
- no leds are working yet
  - there is a script in scripts to send midi messages
  - and pioneer actually documented the midi messages to turn leds on/off: https://faq.pioneerdj.com/files/img/DDJ-S1_MIDI_Messages_2.pdf
- tempofader works
  - sync button not implemented
