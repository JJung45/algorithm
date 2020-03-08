const numJewelsInStones = (J, S) => { //J = "aA", S = "aAAbbbb"
    J = J.split('');
    S = S.split('');
    let result = 0;
    S.forEach((stone, index)=>{
        if(J.includes(stone)){
            result ++;
        }
    })
    return result; //3
};