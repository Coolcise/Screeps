module.exports = {

    behavior: function(creep){
        if (creep.carry.energy == 0 || creep.carry.energy == 1){
            creep.moveTo(Game.spawns.Spawn1);
            if (Game.spawns.Spawn1.energy >= creep.carryCapacity){
              Game.spawns.Spawn1.transferEnergy(creep);
            }
        }
        else{
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if (targets.length){
                creep.moveTo(targets[0]);
                creep.build(targets[0]);
            }
        }
    }
}
