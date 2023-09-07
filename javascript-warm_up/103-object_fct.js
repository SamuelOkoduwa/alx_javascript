#!usr/bin/node

const myObject = {
	type: 'object',
	value: 12,
};
console.log(myObject);
// The updated script
myObject.incr = function() {
	myObject.value++;
};