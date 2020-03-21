const fizzBuzz = (n) => { //1
    let resultArray = [];
    for(let i=0; i<n; i++){
        let num = i+1;
        if(num%3===0&&num%5===0){
            resultArray[i] = 'FizzBuzz';
        }else if(num%3===0){
            resultArray[i] = 'Fizz';
        }else if(num%5===0){
            resultArray[i] = 'Buzz';
        }else resultArray[i] = String(i+1);
    }
    return resultArray; //["1"]
};