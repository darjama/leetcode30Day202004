/**
 * Given a binary array, find the maximum length of a contiguous subarray with equal number of 0 and 1.
 * 
 * Example 1:
 * Input: [0,1]
 * Output: 2
 * Explanation: [0, 1] is the longest contiguous subarray with equal number of 0 and 1.
 * Example 2:
 * Input: [0,1,0]
 * Output: 2
 * Explanation: [0, 1] (or [1, 0]) is a longest contiguous subarray with equal number of 0 and 1.
 * Note: The length of the given binary array will not exceed 50,000.
 * @param {number[]} nums
 * @return {number}
 */
var findMaxLength = function(nums) {
    let total = nums.reduce((a,b) => a + b, 0);
    let isOdd = nums.length % 2;
    let subStringVal = 0
    for (let i = 0; i < nums.length; i++) {
        if (i > 0) subStringVal += nums[i-1];
        let tempVal = subStringVal;
        for (let j = 0; j <= i; j++) {
            if (j > 0) tempVal = tempVal - nums[i-j] + nums[nums.length - j] 
            if ((total - tempVal)*2 === nums.length - i) {
                return nums.length - i;
            }
        }
    }
    return 0;   
}
