const uniqueOccurrences = (arr) => { //[1,2,2,1,1,3]
    let occurrences = {};
    for(let i=0; i<arr.length; i++){
        if(occurrences[arr[i]]){
            occurrences[arr[i]]++;
        }else occurrences[arr[i]] = 1
    }
    console.log(occurrences);
    let result_array = [];
    for(let key in occurrences){
        result_array.push(occurrences[key]);
    }
    console.log(result_array);
    
    for(let i=0; i<result_array.length; i++){
        console.log(result_array.indexOf(result_array[i]), ' ', i)
        if(!(result_array.indexOf(result_array[i])===i)){
            return false;
        }
    }
    return true; //true
};