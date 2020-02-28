function solution(arr) { //[4,3,2,1]
    var tmp = Infinity;

    arr.forEach(function(item) {

        if (tmp > item) {
            tmp = item;
        }

    })

    if(arr.length == 1) {
        return [-1];
    }

    arr.splice(arr.indexOf(tmp),1);

    return arr; // [4,3,2]

}