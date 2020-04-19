
const addDigits = (num) => { //38
    let numArray = num.toString().split('').map((v)=>parseInt(v, 10));
    let resultNum = 0;
    numArray.forEach((v)=>{
        resultNum += v;
    });
    if(resultNum>=10){
        return addDigits(resultNum);
    }else return resultNum; //2
};