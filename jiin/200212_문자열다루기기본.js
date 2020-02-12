const solution = (s) => { //"a234", "1234"
    let nums = ["1","2","3","4","5","6","7","8","9","0"];
    if(s.length!==4&&s.length!==6){
        return false;
    }
    for(let i=0; i<s.length; i++){
        if(!nums.includes(s[i])){
            return false;
        }
    }
    return true; //false, true
}