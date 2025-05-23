function sumNumbers(nums: number[]): number {
  if (nums.length === 0) return 0;
  let result = nums[0];
  for (let i = 1; i < nums.length; i++) {
    result += nums[i];
  }
  return result;
}

console.log(sumNumbers([1, 2, 3]));
