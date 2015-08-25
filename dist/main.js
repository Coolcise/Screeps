var harvester = require('harvester');
var builder = require('builder');
var upgrader = require('upgrader');
var carrier = require('carrier');
var guard = require('guard');
var maintenance = require('maintenance');

maintenance.maintainCreepCount();

if (!(Game.time % 10)){
    maintenance.updateCreepArrays()
}

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

  if (creep.memory.role == 'carrier'){
    carrier.behavior(creep);
  }
}
