function sumOfSquares(numbers: number[]): number {
  return numbers.reduce((acc, curr) => acc + Math.pow(curr, 2), 0);
}

// Example usage
const exampleNumbers = [1, 2, 3, 4];
console.log(sumOfSquares(exampleNumbers)); // Output: 55
