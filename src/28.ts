// Example of a mathematical problem or question
function solveProblem() {
  // Define variables and perform calculations
  let sum = 0;
  let difference = -3;

  // Perform arithmetic operations
  if (difference > 0) {
    sum += difference * 2;
  } else if (difference < 0) {
    sum -= difference * (-2);
  }

  return `The result is: ${sum}`;
}

// Call the function and print the result to the console
console.log(solveProblem());
