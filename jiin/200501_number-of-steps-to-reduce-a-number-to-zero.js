const numberOfSteps  = (num) => { //14
    let result = 0;
    while(num>0){
        num%2===0 ? num = num/2 : num = num-1;
        result++;
    }
    return result; //6
};