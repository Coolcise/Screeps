module.exports = {

  behavior: function(creep){

    var currentRoom = creep.room;
    if (creep.carry.energy === 0 || creep.carry.energy === 1){
      creep.moveTo(Game.spawns.Spawn1);

      var target = creep.pos.findClosest(FIND_DROPPED_ENERGY);
      if(target) {
        creep.moveTo(target);
        creep.pickup(target);
      }
      else if ((Game.spawns.Spawn1.energy >= (creep.carryCapacity / .75)) && !(Memory.rooms.E12N6.spawnQueue.length)){
        Game.spawns.Spawn1.transferEnergy(creep);
      }

    }
    else{
      var targets = Memory.rooms.E12N6.extensionsArray;

      var allStructures = Game.rooms.E12N6.find(FIND_MY_STRUCTURES);

      for (var structure in allStructures) {

        if ((allStructures[structure].structureType === STRUCTURE_EXTENSION)
        && (allStructures[structure].energy < allStructures[structure].energyCapacity)) {
          creep.moveTo(allStructures[structure]);
          creep.transferEnergy(allStructures[structure]);
          break;
        }
      }
      creep.moveTo(allStructures[structure]);
      creep.transferEnergy(allStructures[structure]);

    }
  }
}
