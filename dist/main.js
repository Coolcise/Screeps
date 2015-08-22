var globalFunctions = require('globalFunctions');

module.exports = {

    maintainCreepCount: function() {

      var harvesterCount = 0;
      var builderCount = 0;
      var upgraderCount = 0;

      for (var name in Game.creeps) {
        var role = Game.creeps[name].memory.role;
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

    //console.log(harvesterCount, builderCount, upgraderCount);

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
