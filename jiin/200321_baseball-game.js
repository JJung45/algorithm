const calPoints = (ops) => { //["5","2","C","D","+"]
let valid_num = [];
let score = 0;
for(let i=0; i<ops.length; i++){
    if(ops[i]==='D'){
        let new_valid = valid_num[valid_num.length-1]*2;
        score = score + new_valid;
        valid_num.push(new_valid);
    }else if(ops[i]==='+'){
        let new_valid = valid_num[valid_num.length-2]+valid_num[valid_num.length-1];
        score = score + new_valid;
        valid_num.push(new_valid);
    }else if(ops[i]==='C'){
        score = score - valid_num[valid_num.length-1];
        valid_num.pop();
    }else {
        let new_valid = Number(ops[i]);
        score = score+Number(ops[i]);
        valid_num.push(new_valid);
    }
}
return score; //30
};