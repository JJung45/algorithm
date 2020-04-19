const findComplement = (num) => { // 5
    num = num.toString(2),10;
    let result = '';
    for(let i=0; i<num.length; i++){
        if(num[i]==='0'){
            result += '1';
        }else {
            result += '0';
        }
    }
    return parseInt(result, 2); //2
};