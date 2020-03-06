const isAnagram = (s, t) => { //"anagram","nagaram"
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    if(s===t){
        return true // true
    }else return false; 
};