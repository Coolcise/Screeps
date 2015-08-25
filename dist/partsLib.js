module.exports = {

	getCost: function(parts) {
		var totalCost = 0;
		var costDictionary = new Array();
		costDictionary[MOVE] = 50;
		costDictionary[WORK] = 100;
		costDictionary[CARRY] = 50;
		costDictionary[ATTACK] = 80;
		costDictionary[RANGED_ATTACK] = 150;
		costDictionary[HEAL] = 250;
		costDictionary[TOUGH] = 10;

		for (var i = 0; i < parts.length; ++i)
		totalCost += costDictionary[parts[i]];

		return totalCost;
	},

	getCreepParts: function(creepType) {

		var parts = new Array();


		//Add more variants when higher room level is aquired and update for more rooms
		if(Memory.rooms.W9S11.extensionsArray.length >= 10) {						//800 energy max
			
			parts['harvester']	=	[	WORK, WORK, WORK, WORK, WORK, WORK,
															CARRY, CARRY, CARRY,
															MOVE	];
			parts['builder'] 		=	[	WORK, WORK, WORK, WORK,
															CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
															MOVE, MOVE	];
			parts['upgrader'] 	= [	WORK, WORK, WORK, WORK, WORK, WORK, WORK,
															CARRY, MOVE	];
			parts['carrier']		=	[	CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
															CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
															MOVE, MOVE, MOVE	];
			parts['mule']				= [	CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
															CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
															CARRY, MOVE	];
			parts['guard'] 			=	[	ATTACK, TOUGH, MOVE, MOVE];			//TBD

		}
		else if(Memory.rooms.W9S11.extensionsArray.length >= 5) {				//550 energy max

			parts['harvester'] 	= [	WORK, WORK, WORK, WORK, CARRY, CARRY, MOVE	];
			parts['builder'] 		= [	WORK, WORK, WORK, CARRY, CARRY, CARRY,
															MOVE, MOVE	];
			parts['upgrader']		= [	WORK, WORK, WORK, WORK, CARRY, MOVE	];
			parts['carrier'] 		= [	CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
															CARRY, CARRY, MOVE, MOVE	];
			parts['mule']				= [	CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, CARRY,
															CARRY, CARRY, CARRY, MOVE	];
			parts['guard'] 			= [	ATTACK, TOUGH, MOVE, MOVE	];			//TBD

		}
		else{
																													//300 energy max
			parts['harvester'] 		= [	WORK, WORK,  CARRY, MOVE	];
			parts['builder'] 			= [	WORK, WORK, CARRY, MOVE	];
			parts['upgrader'] 		= [	WORK, WORK, CARRY, MOVE	];
			parts['carrier'] 			= [	CARRY, CARRY, CARRY, CARRY, MOVE, MOVE	];
			parts['mule']					= [	CARRY, CARRY, CARRY, CARRY, CARRY, MOVE	];
			parts['guard'] 				= [	ATTACK, TOUGH, MOVE, MOVE	];

		}

		return parts[creepType];

	}
}
