const judgeCircle = (moves) => { //"UD"
    let x=0;
    let y=0;
    for(let i=0; i<moves.length; i++){
        if(moves[i]==='U'){
            y++;
        }else if(moves[i]==='D'){
            y--;
        }else if(moves[i]==='L'){
            x--;
        }else if(moves[i]==='R'){
            x++;
        }
    }
    if(x===0&&y===0){
        return true; //true
    }else return false;
};