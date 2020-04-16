const intersection = (nums1, nums2) => { //[1,2,2,1] , [2,2]
    let result = [];
    for(let i=0; i<nums1.length; i++){
        for(let j=0; j<nums2.length; j++){
            if(nums1[i]===nums2[j]){
                if(!result.includes(nums1[i])){
                    result.push(nums1[i])
                }
            }
        }
    }
    return result; //[2]
};