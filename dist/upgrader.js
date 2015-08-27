module.exports = {

  behavior: function(creep){
    if (creep.carry.energy == 0){
      creep.moveTo(Game.spawns.Spawn1);
      if (Game.spawns.Spawn1.energy >= creep.carryCapacity && !Memory.rooms.W8S17.spawnQueue){
        Game.spawns.Spawn1.transferEnergy(creep);
      }
    }
    else{
      var target = creep.room.controller;
      if (target){
        creep.moveTo(target);
        creep.upgradeController(target);
      }
    }
  }
}
