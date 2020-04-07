/**
 * Given an array of strings, group anagrams together.
 * 
 * Example:
 * 
 * Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
 * Output:
 * [
 *   ["ate","eat","tea"],
 *   ["nat","tan"],
 *   ["bat"]
 * ]
 * Note:
 * 
 * All inputs will be in lowercase.
 * The order of your output does not matter.
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    //o: array of arrays of strings, each sub-array containing words that are anagrams of each other
    //i: array of strings
    //e: no strings in input
    if (strs.length === 0) {
        return [];
    }
    // init result object
    var anagrams = {};
    // itereate thru input array
    for  (var i = 0; i < strs.length; i++) {
        // init alphaOrder variable for characters in word[i]
        let alphaOrder = strs[i].split('').sort().join(''); 
         // if alphaOrder not a key in result object, create it with [word[i]] as it's value
        if (anagrams[alphaOrder] === undefined) {
            anagrams[alphaOrder] = [strs[i]];
        } else {
            // if alphaOrder is a key in result object, push word[i] to it's value array
            anagrams[alphaOrder].push(strs[i]);
        }
    }
    //iterate thru keys in anagrams
    return Object.values(anagrams);
};
