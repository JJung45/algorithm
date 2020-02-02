function solution(arr) { //arr = [2,5,1,5,7]
    let total = 0;
    for(let i=0; i<arr.length; i++){
        total  = total+arr[i];
    }
    let result = total / arr.length;
    return result; //4
}