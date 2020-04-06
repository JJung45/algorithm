const generateTheString = (n) => { //4
    let result = '';
    for(let i=0; i<n; i++){
            if(i===n-1){
                if(n%2===0){
                    result += 'm';
                    break;
                }
            }
            result += 'n';
     }
    return result;//"nnnm"
};