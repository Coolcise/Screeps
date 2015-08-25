var globalFunctions = require('globalFunctions');
var roomMemory = Memory.rooms.roomName;


module.exports = {

  maintainCreepCount: function(roomName) {

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

    if (harvesterCount < roomMemory.harvesters) {
      globalFunctions.spawnCreep('harvester');
    }
    else if (builderCount < roomMemory .builders){
      globalFunctions.spawnCreep('builder');
    }
    else if (upgraderCount < roomMemory.upgraders)
    globalFunctions.spawnCreep('upgrader');
  },

  updateArrays: function(roomName) {

    initArrays(roomName);

    deadCreepMemory();

    var allStructures = Game.rooms.roomName.find(FIND_MY_STRUCTURES);

    for (var structure in allStructures) {
      if ((structure.structureType === STUCTURE_EXTENSION)
      && !(roomMemory.extensionsArray[structure])) {
        roomMemory.extensionsArray.push(structure);
      }
    }
  },

  deadCreepMemory: function() {

    for(var i in Memory.creeps) {
      if(!Game.creeps[i]) {
        delete Memory.creeps[i];
      }
    }
  }

  initArrays: function(roomName) {

    if (!roomMemory.harvesterArray){
      roomMemory.harvesterArray = new Array();
    }

    if (!roomMemory.builderArray) {
      roomMemory.builderArray = new Array();
    }

    if(!roomMemory.upgraderArray){
      roomMemory.upgraderArray = new Array();
    }

    if (!roomMemory.carrierArray){
      roomMemory.carrierArray = new Array();
    }

    if(!roomMemory.guardArray){
      roomMemory.guardArray = new Array();
    }

    if(!roomMemory.extensionsArray){
      roomMemory.extensionsArray = new Array();
    }

    if(!roomMemory.spawnQueue){
      roomMemory.spawnQueue = new Array();
    }
  }

}
