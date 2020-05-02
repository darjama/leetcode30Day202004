/**
 * Given a non-empty binary tree, find the maximum path sum.
 * 
 * For this problem, a path is defined as any sequence of nodes from some starting node to any 
 * node in the tree along the parent-child connections. The path must contain at least one node 
 * and does not need to go through the root.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
  // leftPath, rightPath, doublePath
  // compare continuing current path, vs starting new path vs current path without adding node
var maxPathSum = function(root) {
  let result = -Infinity;
  var compare = function(node) {
    if (node === null) return 0; 
    let compLeft = compare(node.left);
    let compRight = compare(node.right);
    let current = Math.max(node.val, node.val + compLeft, node.val + compRight);
    result = Math.max(result, current, node.val + compRight + compLeft)
    return current;
  }
  compare(root)
  return result;
};
