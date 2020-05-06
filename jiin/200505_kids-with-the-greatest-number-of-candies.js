const kidsWithCandies = (candies, extraCandies)=> { // [2,3,5,1,3], 3
    let greatest = 0;
    candies.forEach((v, i)=>{
        if(greatest<v) greatest=v;
    })
    let result = [];
    candies.forEach((v, i)=>{
        if(v+extraCandies>=greatest){
            result[i]=true;
        }else result[i]=false;
    });
    return result; //[true,true,true,false,true]
};