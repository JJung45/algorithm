const countCharacters = (words, chars) => { //{["cat","bt","hat","tree"],"atach"
    let result = 0;
    for(let i=0; i<words.length; i++){
        let newChars = chars.split('');
        let complete = true;
        for(let j=0; j<words[i].length; j++){
            if(newChars.includes(words[i][j])){
                newChars.splice(newChars.indexOf(words[i][j]),1);
            }else {
                complete = false;
                break;
            }
        }
        if(complete) result = result + words[i].length;
    }
    return result; //6
};