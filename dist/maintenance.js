var globalFunctions = require('globalFunctions');
var roomMemory = Memory.rooms.roomName;


module.exports = {

  maintainCreepCount: function() {

    var harvesterCount = 0;
    var builderCount = 0;
    var upgraderCount = 0;

    for (var name in Game.creeps) {
      var role = Game.creeps[name].memory.role;
      switch(role){
        case 'harvester':
        harvesterCount++;
        break;
        case 'builder':
        builderCount++;
        break;
        case 'upgrader':
        upgraderCount++;
        break;
      }
    }

    if (harvesterCount < Memory.rooms.W9S11.harvesters) {
      globalFunctions.spawnCreep('harvester');
    }
    else if (builderCount < Memory.rooms.W9S11.builders){
      globalFunctions.spawnCreep('builder');
    }
    else if (upgraderCount < Memory.rooms.W9S11.upgraders)
    globalFunctions.spawnCreep('upgrader');
  },

  updateCreepArrays: function() {

    deadCreepMemory();

  },

  deadCreepMemory: function() {

    for(var i in Memory.creeps) {
      if(!Game.creeps[i]) {
        delete Memory.creeps[i];
      }
    }
  }

  initArrays: function(roomName) {

    if (!Memory.rooms.W9S11.harvesterArray){
      Memory.rooms.W9S11.harvesterArray = new Array();
    }

    if (!Memory.rooms.W9S11.builderArray) {
      Memory.rooms.W9S11.builderArray = new Array();
    }

    if(!Memory.rooms.W9S11.upgraderArray){
      Memory.rooms.W9S11.upgraderArray = new Array();
    }

    if (!Memory.rooms.W9S11.carrierArray){
      Memory.rooms.W9S11.carrierArray = new Array();
    }

    if(!Memory.rooms.W9S11.guardArray){
      Memory.rooms.W9S11.guardArray = new Array();
    }

    if(!Memory.rooms.W9S11.extensionsArray){
      Memory.rooms.W9S11.extensionsArray = new Array();
    }

    if(!Memory.rooms.W9S11.spawnQueue){
      Memory.rooms.W9S11.spawnQueue = new Array();
    }

    var allStructures = Game.rooms.roomName.find(FIND_MY_STRUCTURES);

    for (var structure in allStructures) {
      if ((structure.structureType === STUCTURE_EXTENSION)
      && !(Memory.rooms.W9S11.extensionsArray[structure])) {
        Memory.rooms.W9S11.extensionsArray.push(structure);
      }
    }
  }

}
