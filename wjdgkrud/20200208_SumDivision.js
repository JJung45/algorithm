function solution(n) { //12
    var answer = 0;

    for(var i=0; i<=n; i++) {
        if(n%i == 0) {
            answer += i;
        }
    }

    return answer;//28
}