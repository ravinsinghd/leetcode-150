/**
 Do not return anything, modify nums1 in-place instead.
 */
//function merge(nums1: number[], m: number, nums2: number[], n: number): void {
function merge(nums1, m, nums2, n) {
  let num1CurrentIndex = 0;

  while (nums2.length > 0) {
    if (num1CurrentIndex >= m) {
      const num2Length = nums2.length;
      const insertIndex = nums1.length - num2Length;
      nums1.splice(insertIndex, num2Length, ...nums2);
      nums2 = [];
    } else if (nums1[num1CurrentIndex] > nums2[0]) {
      nums1.splice(num1CurrentIndex, 0, nums2[0]);
      nums1.pop();
      nums2.shift();
      num1CurrentIndex = num1CurrentIndex + 1;
    } else {
      num1CurrentIndex = num1CurrentIndex + 1;
    }
  }
}

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);
