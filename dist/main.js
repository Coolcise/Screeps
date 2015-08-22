/*
TODO:
>Make listing work
>list locations, positions
>Pathfinding, list important sectors?
>Construction building
>globalCreepHandling
  >spawning
  >deleting
  >manage memory (dead creeps)
>mail system
>Harvesting
>Creep upgrades
>Defense
>Maintenance
  >Creep
  >structures
>Upgrade controller
*/


var harvester = require('harvester');
var builder = require('builder');
var upgrader = require('upgrader');
var guard = require('guard');
var inits = require('inits');
var maintenance = require('maintenance');

maintenance.maintainCreepCount();

for (var name in Game.creeps){
    var creep = Game.creeps[name];

    if (creep.memory.role == 'harvester'){
        harvester.behavior(creep);
    }

    if (creep.memory.role == 'builder'){

        builder.behavior(creep);
    }

    if (creep.memory.role == 'upgrader'){

        upgrader.behavior(creep);
    }

    if (creep.memory.role == 'guard'){
        guard.behavior(creep);
    }
}
