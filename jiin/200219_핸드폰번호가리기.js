const solution = (phone_number) => { //"01033334444","027778888"
    let pn_array = phone_number.split('');
    for(let i=0; i<phone_number.length-4; i++){
        pn_array[i]='*';
    }
    return pn_array.join(''); //"*******4444", "*****8888"
}