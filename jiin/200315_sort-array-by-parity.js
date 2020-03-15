const sortArrayByParity = (A) => { //[3,1,2,4]
    let even = A.filter(num=>num%2===0);
    let odd = A.filter(num=>num%2!==0);
    let result = even.concat(odd);
    return result; //[2,4,3,1]
};