function sumOfSquares(nums: number[]): number {
  let sum = 0;
  for (let num of nums) {
    sum += Math.pow(num, 2);
  }
  return sum;
}

// Example usage:
const numbers: number[] = [1, 2, 3, 4, 5];
console.log(sumOfSquares(numbers)); // Output: 55
