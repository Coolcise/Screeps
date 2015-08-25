module.exports = {

    behavior: function(creep){
        if (creep.carry.energy == 0){
            creep.moveTo(Game.spawns.Spawn1);
            if (Game.spawns.Spawn1.energy >= creep.carryCapacity){
              Game.spawns.Spawn1.transferEnergy(creep);
            }
        }
        else{
            var target = Game.rooms.W9S11.controller;
            if (target){
                creep.moveTo(target);
                creep.upgradeController(target);
            }
        }
    }
}
