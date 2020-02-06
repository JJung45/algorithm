function solution(seoul) {//[Jane, Kim]
    var answer = '';

    seoul.forEach(function (key, item) {
        if (key == 'Kim') {
            answer = '김서방은 ' + item + '에 있다';
        }
    });

    return answer;//	김서방은 1에 있다
}