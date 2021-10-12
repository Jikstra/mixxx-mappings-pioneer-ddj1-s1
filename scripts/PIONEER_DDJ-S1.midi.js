const BUTTON_PRESSED = 127;
const BUTTON_RELEASED = 0;


function DBG(str) {
  print("[PionerDDJS1] " + str);
}


var PionerDDJS1 = {};

PionerDDJS1.init = function(id, debugging) {
  DBG("Hello from PionerDDJS1!");
}

PionerDDJS1.trackBrowse = function(channel, control, value, status, group) {
  DBG('value: ' + value)
  if (value === 1) {
    engine.setValue('[Library]', 'MoveDown', 1)
  } else if (value === 127) {
    engine.setValue('[Library]', 'MoveUp', 1)
  }
}

var JOG_SCALE = 0.1

PionerDDJS1.wheelTurn = function(channel, control, value, status, group) {
  var newValue;
  if (value < 64) {
      newValue = value;
  } else {
      newValue = value - 128;
  }

  newValue = newValue * JOG_SCALE

  var deckNumber = script.deckFromGroup(group);
  if (engine.isScratching(deckNumber)) {
      engine.scratchTick(deckNumber, newValue); // Scratch!
  } else {
      engine.setValue(group, 'jog', newValue); // Pitch bend
  }
}


PionerDDJS1.shutdown = function() {
  DBG("Goodbye from PionerDDJS1!");
}
