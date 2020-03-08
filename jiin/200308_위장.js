const solution = (clothes) => { //([[yellow_hat, headgear], [blue_sunglasses, eyewear], [green_turban, headgear]]), ([[crow_mask, face], [blue_sunglasses, face], [smoky_makeup, face]])
    let kinds = [];
    for(let i=0; i<clothes.length; i++){
        let check = false;
        kinds.forEach((kind, index)=>{
            if (kind[0]===clothes[i][1]){
                kind[1]++;
                check = true;
            }
        });
        if(check===false){
            kinds.push([clothes[i][1],1]);
        }
    }
    let result = 1;
    kinds.forEach((kind, index)=>{
        result = result * (kind[1]+1);
    })
    return (result-1); //5, 3
}