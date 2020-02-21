function solution(n) // 123
{
    var n_array = n.toString().split('');
    var answer = 0;

    n_array.forEach(function(item) {
        answer += parseInt(item);
    });

    return answer; // 6
}