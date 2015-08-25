module.exports = {

  behavior: function(creep){

    var currentRoom = creep.room;
    if (creep.carry.energy == 0){
      creep.moveTo(Game.spawns.Spawn1);
      Game.spawns.Spawn1.transferEnergy(creep);

    }
    else{
      var targets = Memory.rooms.W9S11.extensionsArray;

      for (var extension in targets) {
        var energyAmount = targets[extension].energy;
        if (energyAmount < targets[extension].energyCapacity){
          creep.moveTo(targets[extension]);
          creep.transferEnergy(target[extension]);
          break;
        }
      }
    }
  }
}
