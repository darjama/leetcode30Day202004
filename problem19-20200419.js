/**
 * Search in Rotated Sorted Array
 * Solution
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.
 * 
 * (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).
 * 
 * You are given a target value to search. If found in the array return its index, otherwise return -1.
 * 
 * You may assume no duplicate exists in the array.
 * 
 * Your algorithm's runtime complexity must be in the order of O(log n).
 * 
 * Example 1:
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 0
 * Output: 4
 * Example 2:
 * 
 * Input: nums = [4,5,6,7,0,1,2], target = 3
 * Output: -1
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    if (target === nums[0]) {
        return 0;
    }
    var start = nums[0]
    if (target === nums[nums.length - 1]) {
        return nums.length - 1;
    } 
    var end = nums[nums.length - 1];
    if (target > end && target < start) return -1;
    let leftBound = 0;
    let rightBound = nums.length -1;
    let current = Math.floor(nums.length/2) // start in middle
    while (nums[current] !== target) {
        if ((target < end && (target > nums[current] || nums[current] > end)) ||
           (target > end  && target > nums[current]) && nums[current] > end ) {
            leftBound = current;
            current = Math.ceil(leftBound + (rightBound-leftBound)/2);
        } else {
            rightBound = current;
            current = Math.ceil(leftBound + (rightBound-leftBound)/2);
        }
        if (rightBound === current) return -1;
    }
    return current;
};
