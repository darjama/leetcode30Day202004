/**
 * Given an array of non-negative integers, you are initially positioned at the first index of the array.
 * 
 * Each element in the array represents your maximum jump length at that position.
 * 
 * Determine if you are able to reach the last index.
 * 
 * Example 1:
 * 
 * Input: [2,3,1,1,4]
 * Output: true
 * Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
 * Example 2:
 * 
 * Input: [3,2,1,0,4]
 * Output: false
 * Explanation: You will always arrive at index 3 no matter what. Its maximum
 *              jump length is 0, which makes it impossible to reach the last index.
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let zeroes = []
    for (let i =  nums.length -2; i >= 0; i--) {
        if (!nums[i]) {
           zeroes.push(i);
        } else if (zeroes.length > 0) {
            for (let j = zeroes.length -1; j >= 0; j--) {
                if (nums[i] + i > zeroes[j]) {
                    zeroes.splice(j,1)
                }
            }
        }
    }
    return !zeroes.length;
};
