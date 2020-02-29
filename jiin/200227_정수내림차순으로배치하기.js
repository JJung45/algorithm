const solution = (n) => { //118372
    n = String(n);
    let n_array = [];
    for(let i=0; i<n.length; i++){
        n_array.push(Number(n[i]));
    };
    n_array.sort((a,b)=>{
        return a-b;
    }).reverse();
    let result = '';
    n_array.forEach((num)=>{
        result+=num;
    })
    return Number(result); //873211
} 