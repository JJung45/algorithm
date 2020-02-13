function solution(x) { //10,12,11,13
    let num = String(x);
    let plus = 0;
    for(let i=0; i<num.length; i++){
        plus += Number(num[i]);
    }
    return x%plus===0?true:false; //true,true,false,false
}