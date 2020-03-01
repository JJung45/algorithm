function solution(s) { // try hello world
    var s_array = s.split(" ");
    var result = [];

    for(var i = 0; i<s_array.length; i++) {
        s_array[i] = s_array[i].split("");
        s_array[i].forEach(function(item, key, arr){
            key % 2 == 0
                ? arr[key] = arr[key].toUpperCase()
                : arr[key] = arr[key].toLowerCase();
        });
        s_array[i] = s_array[i].join('');
    }

    return s_array.join(' '); //TrY HeLlO WoRlD
}