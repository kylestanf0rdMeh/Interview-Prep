/**
 * PROBLEM: Given 2 strings s1 and s2, return true if s2 contains a permutation
 * of s1, or false otherwise
 * 
 * TEST CASE: s1 = 'ab', s2 = 'eidbaooo'
 * OUTPUT: true
 */

function checkInclusion(s1, s2){
    if(s1.length > s2.length) return false

    const cache1 = {}
    const cache2 = {}

    for(let i = 0; i < s1.length; i++){
        s1[i] in cache1 ? cache1[s1[i]]++: cache1[s1[i]] = 1;
        s2[i] in cache2 ? cache2[s2[i]]++: cache2[s2[i]] = 1;
    }

    const checkCache = (cache1, cache2) => {
        if(Object.values(cache1).length !== Object.values(cache2)){
            for(const key in cache1){
                if(cache1[key] !== cache2[key]){
                    return false;
                } 
            }
        }
        return true
    }

    for(let i = s1.length; i < s2.legnth; i++){
        let charOut = s2[i - s1.length]
        cache2[charOut] === 1 ? delete cache2[charOut] : cache2[charOut]--;

        let charIn = s2[i];
        cache2[charIn] ? cache2[charIn]++ : cache2[charIn] = 1;

        if(checkCache(cache1, cache2)) return true;
    }
    return false;
}