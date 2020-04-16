const lastStoneWeight = (stones) => { //[2,7,4,1,8,1]
    stones.sort((a,b)=>{return a-b});
    while(stones.length>1){
        let numY = stones[stones.length-1];
        let numX = stones[stones.length-2];
        if(numX === numY){
            stones.pop();
            stones.pop();
        }else if(numX !== numY){
            stones[stones.length-1] = numY-numX;
            stones.splice(stones.length-2,1);
            stones.sort((a,b)=>{return a-b});
        }
    }
    return stones[0] ? stones[0] : 0 //1
};