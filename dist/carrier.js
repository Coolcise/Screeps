module.exports = {

    behavior: function(creep){
        if (creep.carry.energy == 0){
            creep.moveTo(Game.spawns.Spawn1);
            Game.spawns.Spawn1.transferEnergy(creep);

        }
        else{
            var targets = creep.room.find;
            if (target){
                creep.moveTo(target);
                creep.upgradeController(target);
            }
        }
    }
}
