const fs = require('fs');
const readline = require('readline');

// Your mathematical calculations here

try {
  const startTime = new Date().toLocaleTimeString();
  console.log(`Mathematical calculations started at ${startTime}`);
  // Perform your mathematical operations and calculations here
  
  const endTime = new Date().toLocaleTimeString();
  console.log(`Mathematical calculations finished at ${endTime}`);
} catch (error) {
  console.error('An error occurred:', error);
}
