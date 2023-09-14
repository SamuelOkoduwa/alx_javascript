#!/usr/bin/node

// const request = require('request');

// const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// // Function to compute the number of completed tasks by user ID
// function countCompletedTasksByUserId(apiUrl) {
//   request(apiUrl, (error, response, body) => {
//     if (!error && response.statusCode === 200) {
//       const todos = JSON.parse(body);

//       // Create an object to store the count of completed tasks for each user
//       const completedTasksByUser = {};

//       // Filter and count completed tasks
//       todos.forEach((todo) => {
//         if (todo.completed) {
//           if (completedTasksByUser[todo.userId]) {
//             completedTasksByUser[todo.userId]++;
//           } else {
//             completedTasksByUser[todo.userId] = 1;
//           }
//         }
//       });

//       // Print users with completed tasks
//       for (const userId in completedTasksByUser) {
//         console.log(`User ID ${userId} completed ${completedTasksByUser[userId]} task(s).`);
//       }
//     } else {
//       console.error(`Failed to retrieve data from the API. Status code: ${response.statusCode}`);
//     }
//   });
// }

// // Call the function to compute completed tasks by user ID
// countCompletedTasksByUserId(apiUrl);


const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

// Function to compute the number of tasks completed by each user ID
function computeCompletedTasksByUserId(apiUrl) {
  request(apiUrl, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      const todos = JSON.parse(body);
      const completedTasksByUserId = {};

      // Loop through the todos to count completed tasks by user ID
      todos.forEach((todo) => {
        if (todo.completed) {
          if (completedTasksByUserId[todo.userId]) {
            completedTasksByUserId[todo.userId]++;
          } else {
            completedTasksByUserId[todo.userId] = 1;
          }
        }
      });

      // Print users with completed tasks
      for (const userId in completedTasksByUserId) {
        console.log(`User ID ${userId}: ${completedTasksByUserId[userId]} completed tasks`);
      }
    } else {
      console.error(`Failed to retrieve data from the API. Status code: ${response.statusCode}`);
    }
  });
}

// Call the function to compute completed tasks by user ID
computeCompletedTasksByUserId(apiUrl);
