const smallerNumbersThanCurrent = (nums) => {
  //[8,1,2,2,3]
  let result = [];
  for (let i = 0; i < nums.length; i++) {
    let smallerNums = 0;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        if (nums[i] > nums[j]) {
          smallerNums++;
        }
      }
    }
    result.push(smallerNums);
  }
  return result; //[4,0,1,1,3]
};
