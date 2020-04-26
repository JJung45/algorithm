const repeatedNTimes = (A) => { //[1,2,3,3]
    for(let i=0; i<A.length; i++){
        if(A.indexOf(A[i])!==i){
            return A[i]; //3
        }
    }
};