module.exports = {

	behavior: function(creep){
		if (creep.carry.energy < creep.carryCapacity) {

			var target = creep.pos.findClosest(FIND_DROPPED_ENERGY);
			if(target) {
				creep.moveTo(target);
				creep.pickup(target);
			}
			else{
				var sources = creep.room.find(FIND_SOURCES);
				creep.moveTo(sources[0]);
				creep.harvest(sources[0]);
			}
		}
		else{
			creep.moveTo(Game.spawns.Spawn1);
			creep.transferEnergy(Game.spawns.Spawn1);
		}
	}
}
