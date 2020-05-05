const replaceElements = (arr) => { //[17,18,5,4,6,1]
    for(let i=0; i<arr.length; i++){
        if(i==arr.length-1){
            arr[i]=-1;
            break;
        }
        let greatest = 0;
        for(let j=i+1; j<arr.length; j++){
            if(greatest<arr[j]){
                greatest=arr[j]
            }
        }
        arr[i]=greatest;
    }
    return arr; //[18,6,6,6,1,-1]
};