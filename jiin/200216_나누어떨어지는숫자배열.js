const solution = (arr, divisor) => { //[5, 9, 7, 10], [2, 36, 1, 3], [3,2,6]
    let result = arr.filter(num => num%divisor ===0);
    result.sort((a,b)=>{return a-b});
    return result.length!==0?result:[-1]; //[5, 10], [1, 2, 3, 36], [-1]
}