/**
 * Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.
 * 
 * Note: You can only move either down or right at any point in time.
 * 
 * Example:
 * 
 * Input:
 * [
 *   [1,3,1],
 *   [1,5,1],
 *   [4,2,1]
 * ]
 * Output: 7
 * Explanation: Because the path 1→3→1→1→1 minimizes the sum.
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(test) {
    for (var y = 0; y < test.length; y++) {
        for (var x = 0; x < test[0].length; x++) {
            if (x > 0 && y === 0) test[y][x] += test[y][x-1];  
            if (x === 0 && y > 0) test[y][x] += test[y-1][x];
            if (x > 0 && y > 0) {
                test[y][x] += Math.min(test[y][x-1], test[y-1][x])
            }
        }
    }
    return test[y -1][x - 1];
};
