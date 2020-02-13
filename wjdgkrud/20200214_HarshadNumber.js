function solution(x) {
    var array = x.toString().split('');
    var result = 0;

    array.forEach(function(item) {
        result+=Number(item);
    });

    return x%result == 0 ? true : false;
}