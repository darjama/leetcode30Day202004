/**
 * Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.
 * 
 * Note that after backspacing an empty text, the text will continue empty.
 * 
 * Example 1:
 * 
 * Input: S = "ab#c", T = "ad#c"
 * Output: true
 * Explanation: Both S and T become "ac".
 * Example 2:
 * 
 * Input: S = "ab##", T = "c#d#"
 * Output: true
 * Explanation: Both S and T become "".
 * Example 3:
 * 
 * Input: S = "a##c", T = "#a#c"
 * Output: true
 * Explanation: Both S and T become "c".
 * Example 4:
 * 
 * Input: S = "a#c", T = "b"
 * Output: false
 * Explanation: S becomes "c" while T becomes "b".
 * Note:
 * 
 * 1 <= S.length <= 200
 * 1 <= T.length <= 200
 * S and T only contain lowercase letters and '#' characters.
 * Follow up:
 * 
 * Can you solve it in O(N) time and O(1) space?
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    while (S.indexOf('#') + T.indexOf('#') > -2) {
        S.indexOf('#') > -1 ? S = S.substring(0,S.indexOf('#') -1) + S.substring(S.indexOf('#') +1): S = S;
        T.indexOf('#') > -1 ? T = T.substring(0,T.indexOf('#') -1) + T.substring(T.indexOf('#') +1): T = T;
    }
    return S === T;
};
