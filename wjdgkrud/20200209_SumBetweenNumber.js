function solution(a, b) { // 3, 5
    var answer = 0;
    var tmp = 0;

    if (b<a) {
        tmp = a;
        a = b;
        b = tmp;
    }

    for(var i=a; i<=b; i++) {
        answer += i;
    }

    return answer; //12
}