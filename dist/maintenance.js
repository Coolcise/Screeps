var globalFunctions = require('globalFunctions');
var partsLib = require('partsLib');


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
    var guardCount = 0;

    for (var name in Game.creeps) {
      var role = Game.creeps[name].memory.role;

      if (!role){
         Game.creeps[name].suicide();
         continue;
      }

      switch(role[0]){
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
       // case 'empty':
        //Game.creeps[name].suicide();
        //break;
      }

    }

    if (!(Memory.rooms.E12N6.spawnQueue === undefined)) {
      for (var queue in Memory.rooms.E12N6.spawnQueue) {
        var role = Memory.rooms.E12N6.spawnQueue[queue];

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
    }

    //console.log(harvesterCount, builderCount, upgraderCount, guardCount);

    if (harvesterCount < Memory.rooms.E12N6.harvesters) {
      Memory.rooms.E12N6.spawnQueue.push('harvester');
    }
    else if (carrierCount < Memory.rooms.E12N6.carriers) {
      Memory.rooms.E12N6.spawnQueue.push('carrier');
    }
    else if (upgraderCount < Memory.rooms.E12N6.guards) {
      Memory.rooms.E12N6.spawnQueue.push('guard');
    }
    else if (builderCount < Memory.rooms.E12N6.builders) {
      Memory.rooms.E12N6.spawnQueue.push('builder');
    }
    else if (upgraderCount < Memory.rooms.E12N6.upgraders) {
      Memory.rooms.E12N6.spawnQueue.push('upgrader');
    }

    if (!(Memory.rooms.E12N6.spawnQueue === undefined || !(Memory.rooms.E12N6.spawnQueue.length))&&
    !(Game.spawns.Spawn1.canCreateCreep(partsLib.getCreepParts(Memory.rooms.E12N6.spawnQueue[0])))) {
      newCreep = Memory.rooms.E12N6.spawnQueue.splice(0,1);
      console.log(newCreep);
      globalFunctions.spawnCreep(newCreep);
    }

  },

  updateCreepArrays: function() {



  },



  initArrays: function() {

    if (Memory.rooms.E12N6.harvesterArray === undefined){
      Memory.rooms.E12N6.harvesterArray = new Array();
    }

    if (Memory.rooms.E12N6.builderArray === undefined) {
      Memory.rooms.E12N6.builderArray = new Array();
    }

    if(Memory.rooms.E12N6.upgraderArray === undefined) {
      Memory.rooms.E12N6.upgraderArray = new Array();
    }

    if (Memory.rooms.E12N6.carrierArray === undefined) {
      Memory.rooms.E12N6.carrierArray = new Array();
    }

    if(Memory.rooms.E12N6.guardArray === undefined) {
      Memory.rooms.E12N6.guardArray = new Array();
    }

    if(Memory.rooms.E12N6.extensionsArray === undefined) {
      Memory.rooms.E12N6.extensionsArray = new Array();
    }

    if(Memory.rooms.E12N6.spawnQueue === undefined) {
      Memory.rooms.E12N6.spawnQueue = new Array();
    }

    if(Memory.rooms.E12N6.harvesters === undefined) {
      Memory.rooms.E12N6.harvesters = 3;
    }

    if(Memory.rooms.E12N6.carriers === undefined) {
      Memory.rooms.E12N6.carriers = 1;
    }

    if(Memory.rooms.E12N6.builders === undefined) {
      Memory.rooms.E12N6.builders = 0;
    }

    if(Memory.rooms.E12N6.upgraders === undefined) {
      Memory.rooms.E12N6.upgraders = 5;
    }

    if(Memory.rooms.E12N6.guards === undefined) {
      Memory.rooms.E12N6.guards = 0;
    }

    var allStructures = Game.rooms.E12N6.find(FIND_MY_STRUCTURES);

    for (var structure in allStructures) {

      if ((allStructures[structure].structureType === STRUCTURE_EXTENSION)
      && !(Memory.rooms.E12N6.extensionsArray[structure])) {
        Memory.rooms.E12N6.extensionsArray.push(structure.pos);
      }
    }
  },

}
