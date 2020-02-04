// arr = [1,1,3,3,0,1,1]
function solution(arr)
{
    var answer = [];
    var lenArr = arr.length;

    answer[0] = arr[0];
    for (var i=0; i<lenArr-1; i++){
        if (arr[i] !== arr[i+1]){
            answer.push(arr[i+1]);
        }
    }

    return answer; // [1,3,0,1]
}