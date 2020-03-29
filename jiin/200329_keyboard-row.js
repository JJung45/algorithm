const findWords = (words) => { //["Hello","Alaska","Dad","Peace"]
    let result = [];
    let alphabetPosition = [
        ['q','w','e','r','t','y','u','i','o','p'],
        ['a','s','d','f','g','h','j','k','l'],
        ['z','x','c','v','b','n','m']
    ];
    for(let i=0; i<words.length; i++){
        let position;
            alphabetPosition.forEach((line, index)=>{
                if(line.includes(words[i][0].toLowerCase())){
                    position = index;
                }
            })
        for(let j=0; j<words[i].length; j++){
            if(!alphabetPosition[position].includes(words[i][j].toLowerCase())){
                break;
            }
            if(j===words[i].length-1){
                result.push(words[i]);
            }
        }
    }
    return result; //["Alaska","Dad"]
};