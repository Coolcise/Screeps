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

    newConstruction: function(structure, toPosX, toPosY, fromPosX, fromPosY, room){
      if (!room){
        var room = Game.rooms.W9S11;
      }

      var path = false;

      var toPos = new RoomPosition(toPosX, toPosY, room);

      if (fromPosX && fromPosY) {
        var fromPos = new RoomPosition(fromPosX, fromPosY, room);
        path = FindPath(fromPos, toPos);
      }

      if(path) {
        for(i = 0; i < path.length; i++){
          room.createConstruction(path[i], structure);
        }
      }
      else{
        room.createConstruction(toPos, structure);
      }

    }
}
