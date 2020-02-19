const solution = (arr) => { //[4,3,2,1], [10]	
    let least=Infinity;
    let least_i;
    arr.forEach((item, index)=>{
        if(least>item){
            least=item;
            least_i=index;
        }
    });
    arr.splice(least_i,1);
    return arr.length!==0?arr:[-1]; //[4,3,2], [-1]
}