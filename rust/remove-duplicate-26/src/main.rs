fn main() {
    let mut nums = vec![0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    let value = remove_duplicates(&mut nums);
}

pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
    let mut unique_num_index: usize = 0;
    let nums_length = nums.len();
    for index in 1..nums_length {
        if nums[index - 1] != nums[index] {
            unique_num_index = unique_num_index + 1;
            nums[unique_num_index] = nums[index]
        }
    }
    let uniqueCount = unique_num_index + 1;
    return uniqueCount.try_into().unwrap();
}
