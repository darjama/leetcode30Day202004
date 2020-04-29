/**
 * Maximal Square
 * Given a 2D binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.
 * 
 * Example:
 * 
 * Input: 
 * 
 * 1 0 1 0 0
 * 1 0 1 1 1
 * 1 1 1 1 1
 * 1 0 0 1 0
 * 
 * Output: 4
 * @param {character[][]} matrix
 * @return {number}
 */

const get = (ary, r, c) => (ary[r] && ary[r][c] ? ary[r][c] : 0);

var maximalSquare = function (matrix) {
  let largestSquare = 0;
  for (let i = matrix.length - 1; i >= 0; --i) {
    for (let j = matrix[0].length - 1; j >= 0; --j) {
      if (matrix[i][j] === "1") {
        matrix[i][j] =
          1 +
          Math.min(
            get(matrix, i + 1, j),
            get(matrix, i, j + 1),
            get(matrix, i + 1, j + 1)
          );
        largestSquare = Math.max(largestSquare, matrix[i][j]);
      }
    }
  }
  return largestSquare ** 2;
};
