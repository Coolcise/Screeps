var partsLib = require('partsLib');

module.exports = {

  spawnCreep: function(type, location) {
    if (!location){
      location = Game.spawns.Spawn1;
    }

    var parts = partsLib.getCreepParts(type);
    location.createCreep(parts, null, {role: type});

  },

  newConstructionSite: function(structure, toPosX, toPosY, fromPosX, fromPosY, room){
    if (!room){
      var room = Game.rooms.E12N6;
    }

    var path = false;

    var toPos = new RoomPosition(toPosX, toPosY, room);

    if (fromPosX && fromPosY) {
      var fromPos = new RoomPosition(fromPosX, fromPosY, room);
      path = room.findPath(fromPos, toPos);
      console.log(path);
    }

    if(path) {
      for(i = 0; i < path.length; i++){
        room.createConstructionSite(path[i], structure);
      }
    }
    else{
      room.createConstructionSite(toPos, structure);
    }

  },

  assignJob: function(creepName, x, y) {

  },

  stopJob: function(creepName) {

  },

  reassignRole: function(creepName, newRole) {

  },

  killCreep: function(creepName) {

  }


}
