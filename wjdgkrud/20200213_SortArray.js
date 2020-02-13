function solution(s) { //Zbcdefg

    var array = s.split('');

    var sort_array = array.sort().reverse();

    var answer = sort_array.join('');

    return answer; // 	gfedcbZ
}