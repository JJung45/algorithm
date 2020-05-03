const createTargetArray = (nums, index) => { //[0,1,2,3,4],[0,1,2,2,1]
    let targetArray = [];
    for(let i=0; i<nums.length; i++){
        if(targetArray[index[i]]!==undefined){
            let frontArray = targetArray.splice(0, index[i]);
            let backArray = targetArray;
            targetArray = [...frontArray, nums[i], ...backArray];
        }else {
            targetArray[index[i]] = nums[i];
        }
    }
    return targetArray; //[0,4,1,3,2]
};