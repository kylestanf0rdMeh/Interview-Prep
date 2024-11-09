/**
 * PROBLEM: Given a string s, find the length of the 
 * longest substring without repeating characters
 * 
 * TEST CASE: s = 'abcabcbb'
 * OUTPUT: 3
 */


function lengthOfLongestSubstring(s){
    let left = 0;
    let maxLength = 0;
    let charSet = new Set();

    for(let right = 0; right < s.lenght; right++){
        while(charSet.has(s[right])){
            charSet.delete(s[left])
            left++;
        }
        charSet.add(s[right])
        maxLength = Math.max(maxLength, right-left + 1);
    }

    return maxLength
}