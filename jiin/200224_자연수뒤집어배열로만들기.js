const solution = (n) => {
    n=n+'';
    let result=n.split('');
    for(let i=0; i<result.length; i++){
        result[i] = Number(result[i]);
    }
    return result.reverse();
}