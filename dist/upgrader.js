module.exports = {

  behavior: function(creep){
    if (creep.carry.energy == 0){
      creep.moveTo(Game.spawns.Spawn1);
      if ((Game.spawns.Spawn1.energy >= (creep.carryCapacity / .75)) && !(Memory.rooms.E12N6.spawnQueue.length)){
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
