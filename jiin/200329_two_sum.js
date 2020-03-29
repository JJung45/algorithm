const twoSum = (nums, target) => { //[2,7,11,15],9
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(i===j){
                break;
            }
            if(nums[i]+nums[j]===target){
                return [i,j]; // [0,1]
            }
        }
    }
};