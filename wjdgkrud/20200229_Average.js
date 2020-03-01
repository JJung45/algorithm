function solution(arr) {
    var answer = 0;

    arr.forEach(function(item) {
        answer += item;
    });

    return answer/arr.length;
}