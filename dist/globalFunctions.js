var partsLib = require('partsLib');

module.exports = {

  spawnCreep: function(type, location) {
    if (!location){
      location = Game.spawns.Spawn1;
    }

    var creepInfo = partsLib.getCreepParts(type);
    location.createCreep(creepInfo[1], null, {role: creepInfo[0]});

  },

  assignJob: function(creepID, pos) {

  },

  stopJob: function(creepID) {

  },

  reassignRole: function(creepID, newRole) {

  },

  killCreep: function(creepID) {

  }


}
