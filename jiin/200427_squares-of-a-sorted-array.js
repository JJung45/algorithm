const sortedSquares = (A) => { //[-4,-1,0,3,10]
    return A.map((v)=>{return v*v}).sort((a,b)=>{return a-b}); //[0,1,9,16,100]
};