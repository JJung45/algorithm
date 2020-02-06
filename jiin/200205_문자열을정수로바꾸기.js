function solution(s) { //'342432423','-2323232'
    let sign = 1;
    if(s[0]==='-'){
        sign = -1;
        s = s.substr(1,s.length);
    }
    return Number(s)*sign; //342432423, -2323232
}