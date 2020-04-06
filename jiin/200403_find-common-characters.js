const commonChars = (A) => { // ["bella","label","roller"]
    let result = A[0].split('').sort();
    for(let i=1; i<A.length; i++){
        let word = A[i].split('').sort();
        for(let j=0; j<result.length; j++){
            if(word.includes(result[j])){
                word.splice(word.indexOf(result[j]),1);
            }else result[j]=-1;
        }
        
    }
    const filteredResult = result.filter((v)=>{
        return v!==-1;
    })
    return filteredResult; // ["e","l","l"]
};