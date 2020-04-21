/**
 * Leftmost Column with at Least a One
 * (This problem is an interactive problem.)
 * 
 * A binary matrix means that all elements are 0 or 1. For each individual row of the matrix, this row is sorted in non-decreasing order.
 * 
 * Given a row-sorted binary matrix binaryMatrix, return leftmost column index(0-indexed) with at least a 1 in it. If such index doesn't exist, return -1.
 * 
 * You can't access the Binary Matrix directly.  You may only access the matrix using a BinaryMatrix interface:
 * 
 * BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y) (0-indexed).
 * BinaryMatrix.dimensions() returns a list of 2 elements [n, m], which means the matrix is n * m.
 * Submissions making more than 1000 calls to BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt to circumvent the judge will result in disqualification.
 * 
 * For custom testing purposes you're given the binary matrix mat as input in the following four examples. You will not have access the binary matrix directly.
 * // This is the BinaryMatrix's API interface.
 * // You should not implement it, or speculate about its implementation
 * function BinaryMatrix() {
 *     @param {integer} x, y
 *     @return {integer}
 *     this.get = function(x, y) {
 *         ...
 *     };
 *
 *     @return {[integer, integer]}
 *     this.dimensions = function() {
 *         ...
 *     };
 * };
 */

/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    let [n,m] = binaryMatrix.dimensions();
    let result = -1;
    let right = m - 1;
    for (let i = 0; i < n; i++) {
        let temp = rowSearch(i,binaryMatrix, right)
        if (temp === 0 ) return 0;
        if (temp > -1) {
          right = Math.min(right, temp)
          result = right;  
        }
    }
    return result;
};

var rowSearch = function(row, binaryMatrix, right){
    let result = -1;
    let left = 0;
    if (binaryMatrix.get(row,left) === 1) return 0;
    if (binaryMatrix.get(row, right) === 0) {
        return - 1;
    } else {
        result = right;
    }
    let center = Math.ceil(right/2);
    while (right - left > 1) {
        if (binaryMatrix.get(row, center) === 1) {
            result = center;
            right = center;
            center = left + Math.ceil((right - left)/2)
        } else {
            left = center;
            center = left + Math.ceil((right - left)/2)            
        }
    }
    return result;
}
