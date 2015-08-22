var globalFunctions = require('globalFunctions');

module.exports = {

    maintainCreepCount: function() {
      var creeps = Game.creeps;

      var harvesterCount = 0;
      var builderCount = 0;
      var upgraderCount = 0;

      for (i = 0; i < creeps.length; i++) {
        var role = creeps[i].memory.role;
        switch(role){
          case 'harvester':
            harvesterCount++;
            break;
          case 'builder':
            builderCount++;
            break;
          case 'upgrader':
            upgraderCount++;
            break;
        }
      }

      if (harvesterCount < Memory.rooms.W9S11.harvesters) {
        globalFunctions.spawnCreep('harvester');
      }
      else if (builderCount < Memory.rooms.W9S11 .builders){
        globalFunctions.spawnCreep('builder');
      }
      else if (upgraderCount < Memory.rooms.W9S11.upgraders)
        globalFunctions.spawnCreep('upgrader');
    }
}
