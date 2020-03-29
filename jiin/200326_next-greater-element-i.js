const nextGreaterElement = (nums1, nums2) => { //[4,1,2], [1,3,4,2]
    let result = [];
    for(let i=0; i<nums1.length; i++){
        let num_position = nums2.indexOf(nums1[i]);
        let finished = false;
        for(let j=num_position+1; j<nums2.length; j++){
            if(!finished){
                if(nums1[i]<nums2[j]){
                   result[i] = nums2[j];
                   finished = true;
                }
            }else{
                break;
            }
        }
        if(!finished){
            result[i] = -1;
        }
    }
    return result; //[-1,3,-1]
};