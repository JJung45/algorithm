const rotate = (nums, k) => { //[1,2,3,4,5,6,7],3
    for(let i=0; i<k; i++){
        let insert_num = nums[nums.length-1];
        nums.splice(nums.length-1,1);
        nums.unshift(insert_num);
    }
    return nums;   //[5,6,7,1,2,3,4]
};