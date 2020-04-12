const selfDividingNumbers = (left, right) => {
  //1, 22
  let result = [];
  for (let i = left; i <= right; i++) {
    let fullNum = i;
    let nums = String(i)
      .split("")
      .map((v) => parseInt(v, 10));
    let success = true;
    for (let j = 0; j < nums.length; j++) {
      if (fullNum % nums[j] !== 0) {
        success = false;
        break;
      }
    }
    if (success) {
      result.push(i);
    }
  }
  return result; //[1,2,3,4,5,6,7,8,9,11,12,15,22]
};
