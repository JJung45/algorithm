function solution(x, n) { // 2	5
    var answer = [];
    var count = 1;

    answer[0] = x;
    while(count != n) {
        answer[count] = answer[count-1] + x;
        count++;
    }

    return answer;//[2,4,6,8,10]
}