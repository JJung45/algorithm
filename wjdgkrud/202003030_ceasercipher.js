function solution(s, n) { // AB	1
    var answer = '';

    for(var i=0; i<s.length; i++) {
        if (s[i] == ' ') {
            answer += ' ';
        } else {
            var number = s.charCodeAt(i)+n;
            answer += number > 90+n ? String.fromCharCode((number-97)%26+97) : String.fromCharCode((number-65)%26+65);
        }
    }

    return answer; // BC
}