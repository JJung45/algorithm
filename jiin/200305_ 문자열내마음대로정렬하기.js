const solution = (strings, n) => { //[sun, bed, car], [abce, abcd, cdx]
    let n_array = [];
    strings.forEach((string, index)=>{
        n_array.push([string[n],string,index]);
    });
    n_array.sort();
    let result = [];
    n_array.forEach((item, index)=>{
        result.push(strings[item[2]]);
    })
    return result; //[car, bed, sun], [abcd, abce, cdx]
}