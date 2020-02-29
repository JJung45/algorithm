function solution(s) { // try hello world
    var answer_array = s.split(" ");
    var result = [];

    answer_array.map(function(item, key){
        item.split("").map(function(item1, key1){
            result[key1] = (key1%2 == 0 ? item1.toUpperCase() : item1.toLowerCase());
        });
        answer_array[key] = result.join("");
    });

    return answer_array.join(" "); // TrY HeLlO WoRlD
}