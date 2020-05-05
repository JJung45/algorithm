const peakIndexInMountainArray = (A) => { //[0,1,0]
    let peak = 0;
    for(let i=1; i<A.length; i++){
        if(A[peak]<A[i]){
            peak = i;
        }else{
            break;
        }
    }
    return peak; //1
};