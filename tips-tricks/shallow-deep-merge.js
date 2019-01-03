/** 
 * What is the difference between deep and shallow merge of objects in javascript?
 * Does deep merge recursively copy all source object enumerable properties into a target object?
 * What does shallow merge do?
*/ 

/** Regarding shallow merge, the properties of the first object are overwritten withe the properties of the second object */ 

let object1 = {
	vibe1: {
		property1: 42,
	},
}; 

let object2 = {
	vibe2: {
		property2: 43, 
	}, 
	newVibe: {
		property3: 99,
	}, 
};

// shallow 
let resultShallow = {
	resultVibration: {
		property2: 83,
	}, 
	resultNewVibe: {
		property3: 900,
	},
}; 

// Deep 
let resultDeep = {
	resultVibeDeep: {
		property1: 420,
		property2: 2100, 
	}, 
	newVibrationDeep: {
		property3: 10,
	},
}; 

console.log(object1);
console.log(object2);
console.log(resultShallow);
console.log(resultDeep);
