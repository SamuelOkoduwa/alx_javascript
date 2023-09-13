#!/usr/bin/node

function createClassRoom(numberOfStudents) {
	//A studentSeat function
	function studentSeat(seat){
		//A return function that returns a seat number
		return function() {
			return seat;
		};
	}
	//An array that stores students
	let students = [];
	// using a loop to populate the number of students
	for (i = 0; i < numberOfStudents; i++ );
	let seatNumber = i + 1;
	students.push(studentSeat(seatNumber)); //using this, you may not need to use the next line
    // let seatFunction = studentSeat(seatNumber);
    // students.push(seatFunction);

	//Return arrays
	return students;
}
let classRoom = createClassRoom(10);

console.log(classRoom[1]());
// console.log(classRoom[3]());
// console.log(classRoom[9]());
