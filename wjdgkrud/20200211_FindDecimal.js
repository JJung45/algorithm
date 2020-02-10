function solution(n) { //10
    var answer = 0;
    var list = [];
    for(var i=0; i<=n; i++) {
        list[i] = 0;
    }

    for(var k=2; k<=n; k++) {

        if (list[k] == 0) {
            answer++;

            for (var j = k + k; j <= n; j += k) {
                list[j] = 1;
            }
        }
    }

    return answer;// 4
}