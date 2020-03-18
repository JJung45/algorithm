const toGoatLatin = (S) => {
    let s_array = S.split(' ');
    s_array.forEach((string, i, array)=>{
        let firstChar = string[0];
        let new_string = '';
        if(firstChar.toLowerCase()==='a'||
          firstChar.toLowerCase()==='e'||
          firstChar.toLowerCase()==='i'||
          firstChar.toLowerCase()==='o'||
          firstChar.toLowerCase()==='u'){
            new_string = string+'ma';
        }else{
            new_string = string.substring(1,string.length) + firstChar + 'ma'
        }
        for(let j=0; j<i+1; j++){
            new_string += 'a';
        }
        array[i] = new_string;
    });
    return s_array.join(' ');
};