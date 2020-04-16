const solution = (progresses, speeds) => { // [93, 30, 55], [1, 30, 5]
    let result = [];
    let day = 0;
    for(let i=0; i<progresses.length; i++){
        let needDays = Math.round((100-progresses[i])/speeds[i]);
        console.log(needDays);
        if(needDays>day){
            day=needDays;
            result.push(1);
        }else{
           result[result.length-1]++; 
        }
    }
    return result; //[2, 1]
}