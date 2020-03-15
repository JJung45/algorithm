const diStringMatch = (S) => { //"IDID"
    let decrease = S.length;
    let increase = 0;
    let result = [];
    for(let i=0; i<S.length; i++){
        if(S[i]==="I"){
            result.push(increase);
            increase++;
        }else if(S[i]==='D'){
            result.push(decrease);
            decrease--;
        }
    }
    if(S[S.length-1]==='I'){
        result.push(increase);
    }else result.push(decrease);
    return result; //[0,4,1,3,2]
};