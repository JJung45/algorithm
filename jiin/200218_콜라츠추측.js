const solution = (num) => { //6,16,626331
    let time = 0;
    while(time!==500){
        if(num===1){
            return time;
        }
        num = num%2===0?num/2:num*3+1;
        time++;
    }
    return -1; //8,4,-1
}