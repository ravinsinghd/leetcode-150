function majorityElement(nums: number[]): number {
  const countTrack = {};
  let majorityCount = 0;
  let majorityElement = 0;
  nums.forEach((num) => {
    let count = countTrack[num];
    let updatedCount = count ? count + 1 : 1;
    countTrack[num] = updatedCount;
    if (majorityCount < updatedCount) {
      majorityCount = updatedCount;
      majorityElement = num;
    }
  });

  return majorityElement;
}
