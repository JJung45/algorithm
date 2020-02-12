function solution(s) { //a234

    var regexp = /^[0-9]*$/;

    var answer = (s.length == 4 || s.length == 6) && regexp.test(s) ? true : false;

    return answer; //false
}