function solution(num) { // 6
    var answer = 0;
    var num = num;

    while(num != 1) {
        num = (num%2 == 0 ? num/2 : (num*3)+1);
        answer++;

        if(answer == 500) {
            answer = -1;
            break;
        }
    }

    return answer; // 8
}