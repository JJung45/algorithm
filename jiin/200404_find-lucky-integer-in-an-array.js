const findLucky = (arr) => { //[2,2,3,4]
    let result = -1;
    let numObject = {} ; 
    for(let i=0; i<arr.length; i++){
        if(numObject.hasOwnProperty(arr[i])){
            numObject[arr[i]]++;
        }else {
            numObject[arr[i]]=1;
        }
    }
    for (key in numObject){
        if(key===String(numObject[key])){
            result = key;
        }
    }
    return result; //2
};