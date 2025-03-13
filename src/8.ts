// This is a sample TypeScript function that takes in an array of numbers and returns the sum of all the even numbers in the array.
function getEvenSums(numbers: number[]): number {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      total += numbers[i];
    }
  }
  return total;
}
