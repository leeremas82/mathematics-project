function findMaxProduct(nums: number[]): number {
  if (nums.length < 2) {
    throw new Error("The array must contain at least two numbers.");
  }

  let maxProduct = nums[0];
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > maxProduct * nums[nums.length - 1]) {
      maxProduct = nums[i];
    }
  }

  return maxProduct;
}
