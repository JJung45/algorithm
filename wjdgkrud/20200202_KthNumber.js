//예시
solution([1, 5, 2, 6, 3, 7, 4],[[2, 5, 3], [4, 4, 1], [1, 7, 3]],[5, 6, 3]); // 리턴값: [5, 6, 3]

function solution(array, commands) {
    var answer = [];

    commands.forEach(function(comm) {
        var first = comm[0]-1;
        var last = comm[1]-1;
        var target = comm[2]-1;

        var tmp = [];
        for(var i = first; i<=last; i++) {
            tmp.push(array[i]);
        }
        tmp.sort();

        answer.push(tmp[target]);
    });

    return answer;
}