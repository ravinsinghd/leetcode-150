//function removeElement(nums: number[], val: number): number {
function removeElement(nums, val) {
  let nonValueCount = 0;
  let numsLength = nums.length;
  let currentIndex = 0;
  let counter = 0;

  while (counter < numsLength) {
    counter++;
    if (nums[currentIndex] === val) {
      nums.splice(currentIndex, 1);
      nums.push(0);
    } else {
      nonValueCount = nonValueCount + 1;
      currentIndex++;
    }
  }
  return nonValueCount;
}

function removeElement1(nums, val) {
  let index = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != val) {
      nums[index] = nums[i];
      index += 1;
    }
  }
  return index;
}

const count = removeElement1([0, 1, 2, 2, 3, 0, 4, 2], 2);
console.log(count);
