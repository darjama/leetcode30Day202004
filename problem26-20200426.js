/**
 * Given two strings text1 and text2, return the length of their longest common subsequence.
 * 
 * A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.
 * 
 * If there is no common subsequence, return 0.
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
// axyzbcde abxyz
var longestCommonSubsequence = function(text1, text2) {
  let map = []
  for (let i = 0; i < text1.length; i++) {
      map.push([...new Array(text2.length)])
    for (let j= 0; j < text2.length; j++) {
      if (i > 0 && j > 0) {
        if (text1[i] === text2[j]) {
          map[i][j] = map[i-1][j-1] + 1
        } else {
          map[i][j] = Math.max(map[i-1][j],map[i][j-1]);
        }
      } else if (i === 0 && j === 0) {
        if (text1[i] === text2[j]) {
          map[i][j] = 1;
        } else {
          map[i][j] = 0;
        }
      } else if (i > 0 && j === 0) {
        map[i][j] = Math.max(map[i-1][j], 0 + (text1[i] === text2[j]));
      } else {
        map[i][j] = Math.max(map[i][j - 1], 0 + (text1[i] === text2[j]));
      } 
    }
  }
  return map[text1.length-1][text2.length-1]
};
