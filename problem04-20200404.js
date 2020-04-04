/**
 *  Move Zeroes
 * Solution
 * Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
 * 
 * Example:
 * 
 * Input: [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 * Note:

 * You must do this in-place without making a copy of the array.
 * Minimize the total number of operations.
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let tailZeroes = true;
    let zeroSteakStart;
    for (let i = nums.length -1; i >= 0; i--){
        if (nums[i] === 0) {
            if (!tailZeroes) {
                zeroStreakStart = i;
                while(i >= 0 && nums[i] === 0) {
                    i--;
                    nums.push(0);
                }
                nums.splice(i+1, zeroStreakStart - i)
            }
        } else {
            tailZeroes = false;
        }
    }
};
