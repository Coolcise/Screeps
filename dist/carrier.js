module.exports = {

  behavior: function(creep){

    var currentRoom = creep.room;
    if (creep.carry.energy === 0 || creep.carry.energy === 1){
      creep.moveTo(Game.spawns.Spawn1);
    if ((Game.spawns.Spawn1.energy >= (creep.carryCapacity / .75)) && !(Memory.rooms.E12N6.spawnQueue.length)){
      Game.spawns.Spawn1.transferEnergy(creep);
    }

    }
    else{
      var targets = Memory.rooms.E12N6.extensionsArray;

    //console.log(Memory.rooms.E12N6.extensionsArray[0].energy)

      //for (var extension in targets) {
        //var energyAmount = targets[extension].energy;
       // console.log(energyAmount);
        //if ((energyAmount === undefined) || (energyAmount < targets[extension].energyCapacity)){
         // console.log(targets[extension]);
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
          //break;
        }
      }
    }
  //}
//}
