const minSubsequence = (nums) => { //[4,3,10,9,8]
    nums = nums.sort((a,b)=>b-a);
    let result = 0;
    let remains = nums.reduce((sum, cur)=>{
        return sum+cur;
    }, 0);
    for(let i=0; i<nums.length; i++){
        result = result + nums[i];
        remains = remains - nums[i];
        if(result>remains){
            return nums.slice(0,i+1); //[10,9]
        }
    }
};