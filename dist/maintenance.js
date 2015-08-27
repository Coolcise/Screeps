var globalFunctions = require('globalFunctions');



module.exports = {

  deadCreepMemory: function() {

    for(var i in Memory.creeps) {
      if(!Game.creeps[i]) {
        delete Memory.creeps[i];
      }
    }
  },

  maintainCreepCount: function() {

    var harvesterCount = 0;
    var builderCount = 0;
    var upgraderCount = 0;
    var carrierCount = 0;
    var guardCound = 0;

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
        case 'carrier':
          carrierCount++;
          break;
        case 'guard':
          guardCount++;
          break;
      }
    }

    for (var type in Memory.rooms.W8S17.spawnQueue) {
      var role = Memory.rooms.W8S17.spawnQueue[type];
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
        case 'carrier':
          carrierCount++;
          break;
        case 'guard':
          guardCount++;
          break;
      }
    }

    if (harvesterCount < Memory.rooms.W8S17.harvesters) {
      Memory.rooms.W8S17.spawnQueue('harvester');
    }
    else if (carrierCount < Memory.rooms.W8S17.carriers) {
      Memory.rooms.W8S17.spawnQueue('carrier');
    }
    else if (upgraderCount < Memory.rooms.W8S17.guards) {
      Memory.rooms.W8S17.spawnQueue('guard');
    }
    else if (builderCount < Memory.rooms.W8S17.builders) {
      Memory.rooms.W8S17.spawnQueue('builder');
    }
    else if (upgraderCount < Memory.rooms.W8S17.upgraders) {
      Memory.rooms.W8S17.spawnQueue('upgrader');
    }

  },

  updateCreepArrays: function() {



  },



  initArrays: function() {

    if (!(Memory.rooms.W8S17.harvesterArray === undefined)){
      Memory.rooms.W8S17.harvesterArray = new Array();
    }

    if (!(Memory.rooms.W8S17.builderArray === undefined)) {
      Memory.rooms.W8S17.builderArray = new Array();
    }

    if(!(Memory.rooms.W8S17.upgraderArray === undefined)) {
      Memory.rooms.W8S17.upgraderArray = new Array();
    }

    if (!(Memory.rooms.W8S17.carrierArray === undefined)) {
      Memory.rooms.W8S17.carrierArray = new Array();
    }

    if(!(Memory.rooms.W8S17.guardArray === undefined)) {
      Memory.rooms.W8S17.guardArray = new Array();
    }

    if(!(Memory.rooms.W8S17.extensionsArray === undefined)) {
      Memory.rooms.W8S17.extensionsArray = new Array();
    }

    if(!(Memory.rooms.W8S17.spawnQueue === undefined)) {
      Memory.rooms.W8S17.spawnQueue = new Array();
    }

    if(!(Memory.rooms.W8S17.harvesters === undefined)) {
      Memory.rooms.W8S17.harvesters = 3;
    }

    if(!(Memory.rooms.W8S17.carriers === undefined)) {
      Memory.rooms.W8S17.carriers = 1;
    }

    if(!(Memory.rooms.W8S17.builders === undefined)) {
      Memory.rooms.W8S17.builders = 0;
    }

    if(!(Memory.rooms.W8S17.upgraders === undefined)) {
      Memory.rooms.W8S17.upgraders = 5;
    }

    if(!(Memory.rooms.W8S17.guards === undefined)) {
      Memory.rooms.W8S17.guards = 0;
    }

    var allStructures = Game.rooms.W8S17.find(FIND_MY_STRUCTURES);

    for (var structure in allStructures) {

      if ((allStructures[structure].structureType === STRUCTURE_EXTENSION)
      && !(Memory.rooms.W8S17.extensionsArray[structure])) {
        Memory.rooms.W8S17.extensionsArray.push(structure.pos);
      }
    }
  }

}
