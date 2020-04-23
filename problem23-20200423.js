/**
 *   Bitwise AND of Numbers Range
 * Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.
 * 
 * Example 1:
 * 
 * Input: [5,7]
 * Output: 4
 * Example 2:
 * 
 * Input: [0,1]
 * Output: 0
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    let result = 0;
    if (m === n) return m & n;
    let mBin = m.toString(2);
    let nBin = n.toString(2);
    while (mBin.length === nBin.length && mBin[0] === nBin[0]) {
        let msb = 0;
        if (m.toString(2).length === n.toString(2).length) msb = Math.pow(2, mBin.length -1);
        result +=msb;
        m -= msb;
        n -= msb;
        mBin = m.toString(2);
        nBin = n.toString(2);
    }
    return result;
};
