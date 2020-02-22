const solution = (x, n) => { //(2,5), (4,3), (-4,2)
    let result = [];
    let num = x;
    for(let i = 0; i<n; i++){
        result[i]=x;
        x=x+num;
    }
    return result; //[2,4,6,8,10], [4,8,12], [-4, -8]
}