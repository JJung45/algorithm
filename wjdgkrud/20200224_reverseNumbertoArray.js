function solution(n) { // 12345

    var solution = [];
    (n.toString().split('').reverse()).map(function(item) {
        solution.push(parseInt(item));
    });

    return solution; //	[5,4,3,2,1]

}