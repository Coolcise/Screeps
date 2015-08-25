module.exports = {

  behavior: function(creep){

    var currentRoom = creep.room;
    if (creep.carry.energy == 0){
      creep.moveTo(Game.spawns.Spawn1);
      Game.spawns.Spawn1.transferEnergy(creep);

    }
    else{
      var targets = Memory.rooms.;
      if (target){
        creep.moveTo(target);
        creep.upgradeController(target);
      }
    }
  }
}
