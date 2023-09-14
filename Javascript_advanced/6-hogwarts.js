#!/usr/bin/node

// Define the studentHogwarts module
function studentHogwarts() {
	// Two Private variables
	let privateScore = 0;
	let name = null;
  
	// Private method to change the score
	function changeScoreBy(points) {
	  privateScore += points;
	}
  
	// Public methods
	return {
	  setName(newName) {
		name = newName;
	  },
	  rewardStudent() {
		changeScoreBy(1);
	  },
	  penalizeStudent() {
		changeScoreBy(-1);
	  },
	  getScore() {
		return `${name}: ${privateScore}`;
	  },
	};
  }
  
  // Create an instance for Harry
  const harry = studentHogwarts();
  harry.setName("Harry");
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  
  // Log Harry's name and score
  console.log(harry.getScore());
  
  // Create an instance for Draco
  const draco = studentHogwarts();
  draco.setName("Draco");
  draco.rewardStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  // Log Draco's name and score
  console.log(draco.getScore());
  