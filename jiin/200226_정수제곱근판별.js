const solution = (n) => { //121, 3
    let sqrt = Math.sqrt(n);
    if(sqrt%1===0){
        return (sqrt+1)*(sqrt+1);
    }else return -1; //144, -1
}