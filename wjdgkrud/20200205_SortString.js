function solution(strings, n) { // [sun, bed, car] , 1
    var answer = [];

    answer = strings.sort(function(a,b){
        var string_a = a.split(',')[0].substring(n,n+1);
        var string_b = b.split(',')[0].substring(n,n+1);

        if (string_a == string_b) {
            return a < b ? -1 : 1;
        } else {
            return string_a < string_b ? -1 : 1;
        }

    });

    return answer; // [car, bed, sun]
}