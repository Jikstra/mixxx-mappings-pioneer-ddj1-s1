#!/bin/bash

python ./scripts/generate-mappings.py > ~/.mixxx/controllers/PIONEER_DDJ-S1.midi.xml
cp ./PIONEER_DDJ-S1.midi.js ~/.mixxx/controllers/
