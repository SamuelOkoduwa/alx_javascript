#!/usr/bin/node

// Importing modules
const fs = require('fs');
const axios = require('axios');

// Function to fetch the webpage content and save it to a file
async function saveWebpageToFile(url, filePath) {
  try {
    // Make a GET request to the specified URL
    const response = await axios.get(url, { responseType: 'text' });

    // Get the webpage content
    const content = response.data;

    // Save the content to a file with UTF-8 encoding
    fs.writeFileSync(filePath, content, 'utf-8');

    console.log(`Webpage content saved to ${filePath}`);
  } catch (error) {
    console.error(`An error occurred: ${error.message}`);
  }
}

// Usage example:
const url = 'https://example.com';  // Replace with your desired URL
const filePath = 'webpage_content.txt';  // Replace with your desired file path
saveWebpageToFile(url, filePath);
