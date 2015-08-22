module.exports = {

    behavior: function(creep){
        if (creep.carry.energy == 0 || creep.carry.energy == 1){
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);
        }else{
            var target = new RoomPosition(18, 5, W9S11);
            if (targets.length){
                creep.moveTo(target);
                creep.upgradeController(target);
            }
        }
    }
}
