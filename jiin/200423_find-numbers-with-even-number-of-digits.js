const findNumbers = (nums) => { //[12,345,2,6,7896]
    let output = 0;
    nums.forEach((num, i)=>{
        if(num.toString().length%2===0){
            output++;
        }
    });
    return output; //2
};