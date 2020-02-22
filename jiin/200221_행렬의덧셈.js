const solution = (arr1, arr2) => { //[[1,2],[2,3]], [[3,4],[5,6]]
    let arr3 =  [];
    for(let i = 0; i<arr1.length; i++){
        arr3[i] = [];
        for(let j=0; j<arr1[i].length; j++){
            arr3[i][j] = arr1[i][j]+arr2[i][j];
        }
    }
    return arr3; //	[[4,6],[7,9]]
}