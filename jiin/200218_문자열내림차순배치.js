const solution = (s) => { //'Zbcdefg'
    let s_array = s.split('').sort().reverse();
    let result = '';
    s_array.forEach((i)=>{
        result+=i;
    })
    return result; //'gfedcbZ'
}