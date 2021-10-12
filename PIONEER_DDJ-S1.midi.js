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

PionerDDJS1.wheelTouch = function(channel, control, value, status, group) {
  var deckNumber = script.deckFromGroup(group);
  if (value === 0x7F) {  // Some wheels send 0x90 on press and release, so you need to check the value
      var alpha = 1.0/8;
      var beta = alpha/32;
      engine.scratchEnable(deckNumber, 128, 33+1/3, alpha, beta);
  } else {    // If button up
      engine.scratchDisable(deckNumber);
  }
}
PionerDDJS1.loopDoubleHalve = function(channel, control, value, status, group) {
  var deckNumber = script.deckFromGroup(group);
  if (value === 0x7F) {
    engine.setValue(group, 'loop_halve', 1);
  } else {
    engine.setValue(group, 'loop_double', 1);
  }
}

PionerDDJS1.shutdown = function() {
  DBG("Goodbye from PionerDDJS1!");
}
