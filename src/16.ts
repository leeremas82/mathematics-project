function squareOfSum(numbers: number[]): number {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return Math.pow(sum, 2);
}

function calculateTriangleArea(base: number, height: number): number {
  return (base * height) / 2;
}
