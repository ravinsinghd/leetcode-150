use std::collections::HashMap;

fn main() {
    let data = vec![1, 1, 1, 1, 3, 1, 1, 2, 2, 2, 1, 1, 2, 2, 3];
    let element = majority_element(data);
    print!("{}", element)
}

pub fn majority_element(nums: Vec<i32>) -> i32 {
    let mut elements = HashMap::new();

    let mut majority_element = 0;
    let mut majority_element_count = 0;

    for item in nums {
        let count = elements.entry(item).or_insert(0);
        *count += 1;

        if majority_element_count < *count {
            majority_element_count = *count;
            majority_element = item;
        }
    }

    return majority_element;
}

pub fn majority_element_1(nums: Vec<i32>) -> i32 {
    let mut elements = HashMap::new();

    let mut majority_element = 0;
    let majority_threshold: i32 = (nums.len() / 2).try_into().unwrap();

    for item in nums {
        let count = elements.entry(item).or_insert(0);
        *count += 1;

        if majority_threshold < *count {
            majority_element = item;
        }
    }

    return majority_element;
}

pub fn majority_element_test(nums: Vec<i32>) -> i32 {
    let mut c = 0;
    let mut m = 0;
    for x in nums {
        if c == 0 {
            m = x;
            c = 1;
        } else if x == m {
            c += 1;
        } else {
            c -= 1;
        }
    }
    m
}
