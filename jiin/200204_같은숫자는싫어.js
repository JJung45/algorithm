const solution=(arr)=> //[2,3,4,4,4,2,1,3], [1,1,2,3,4,4,2,1,5,5,2]
{
    let result_arr = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]!==arr[i+1]){
            result_arr.push(arr[i]);
        }
        //i번째 숫자가 그 다음 순서의 숫자와 같지 않을 경우, 결과 array에 해당 값을 추가한다.
    }
    return result_arr; //[2, 3, 4, 2, 1, 3],[1, 2, 3, 4, 2, 1, 5, 2]
}