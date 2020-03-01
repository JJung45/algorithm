const solution = (s) => {
    let s_array = s.split(' ');
    for(let i=0; i<s_array.length; i++){
        s_array[i]=s_array[i].split('');
        s_array[i].forEach((char, i, arr)=>{
            if(i%2===0){
                arr[i] = arr[i].toUpperCase();
            }else arr[i] = arr[i].toLowerCase();
        })
    }
    s_array.forEach((string, i, arr)=>{
        arr[i] = arr[i].join("");
    });
    s_array = s_array.join(" ");
    return s_array;
}