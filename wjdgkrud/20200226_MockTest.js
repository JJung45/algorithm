function solution(answers) { //[1,3,2,4,2]
    var answer = [];
    var person1 = [1,2,3,4,5];
    var person2 = [2,1,2,3,2,4,2,5];
    var person3 = [3,3,1,1,2,2,4,4,5,5];
    var count = [0,0,0];

    for(var i=0; i < answers.length; i++) {
        if (person1[i%5] == answers[i]) {
            count[0] ++;
        }

        if (person2[i%8] == answers[i]) {
            count[1] ++;
        }

        if (person3[i%10] == answers[i]) {
            count[2] ++;
        }
    }

    var winner_count = Math.max(...count);

    for(var i=0; i<count.length; i++) {
        if (count[i] == winner_count) {
            answer.push(i+1);
        }
    }

    answer.sort();

    return answer; // [1,2,3]
}