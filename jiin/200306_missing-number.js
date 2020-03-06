const missingNumber = (nums) => { //[3,0,1]
    nums = nums.sort((a,b)=>{
        return a-b;
    })
    if(nums[0]!==0){
            return 0;
    }
    for(let i = 0; i<nums.length; i++){
        if((nums[i]+1)===nums[i+1]){
            console.log(i);
        }else return nums[i]+1; //2
    }
};