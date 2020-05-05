const destCity = (paths) => { //[["London","New York"],["New York","Lima"],["Lima","Sao Paulo"]]
    let start = paths.map(v=>v[0]);
    let destination = paths.map(v=>v[1]);
    let result = '';
    destination.forEach((v,i)=>{
        if(!start.includes(v)){
            result = v;
        }
    })
    return result; //"Sao Paulo"
};