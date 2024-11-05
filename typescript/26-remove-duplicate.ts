//function removeDuplicates(nums: number[]): number {
function removeDuplicates(nums) {
  let uniqueNumIndex = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[uniqueNumIndex] !== nums[i]) {
      uniqueNumIndex = uniqueNumIndex + 1;
      nums[uniqueNumIndex] = nums[i];
    }
  }
  return uniqueNumIndex + 1;
}

removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]);
