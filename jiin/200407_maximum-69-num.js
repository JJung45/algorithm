const maximum69Number  = (num) => { //9669
    let result = num;
    let numArray = String(num).split('').map(v=>parseInt(v, 10));
    console.log(numArray);
    
    for(let i=0; i<numArray.length; i++){
        let theNum = '';
        numArray.forEach((v, index)=>{
            if(index === i){
                if(v===6){
                    theNum += '9';
                }else{
                    theNum += '6';
                }
            }else{
                theNum += String(v);
            }
                
        });
        if(result<theNum){
            result = theNum;
        }
    }
    return result; //9969
};