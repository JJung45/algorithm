const subtractProductAndSum = (n) => { //234
    // let sumOfDigits = 0;
    // let productOfDigits = 1;
    // n.toString().split('').forEach((v, i)=>{
    //     let num = parseInt(v, 10);
    //     sumOfDigits += num;
    //     productOfDigits *= num;
    // })
    // return productOfDigits - sumOfDigits;
    
    let sumOfDigits = 0;
    let productOfDigits = 1;
    while(n>0){
        let num = n%10;
        sumOfDigits += num;
        productOfDigits *= num;
        n=Math.floor(n/10);
    }
    return productOfDigits - sumOfDigits; //15
};