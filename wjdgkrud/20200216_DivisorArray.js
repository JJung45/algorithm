function solution(arr, divisor) {//[5, 9, 7, 10]	5
    var answer = [];

    arr.forEach(function(item) {
        if (item%divisor == 0) {
            answer.push(item);
        }
    });

    if (answer.length < 1) {
        answer.push(-1);
    }

    answer.sort(function(a, b){
        return a - b ;
    });

    return answer;//[5, 10]
}