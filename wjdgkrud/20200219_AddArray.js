function solution(arr1, arr2) { // [[1],[2]]
    var answer = Array.from(Array(arr1.length), () => Array());;

    for(var i =0; i < arr1.length; i++) {
        for(var k=0; k<arr1[i].length; k++) {
            answer[i][k] = arr1[i][k]+arr2[i][k];
        }
    }

    return answer; //	[[3],[4]]	[[4],[6]]
}