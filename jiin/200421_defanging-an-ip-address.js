const defangIPaddr = (address) => { //"1.1.1.1"
    let result = '';
    for(let i=0; i<address.length; i++){
        if(address[i]==='.'){
            result += '[.]'
        }else {
            result+=address[i];
        }
    }
    return result; //"1[.]1[.]1[.]1"
}; 