const maxNumberOfBalloons = (text) => { //"nlaebolko"
    let textArray = text.split('');
    textArray = textArray.sort();
    let balloonCheck = {
        'b' : 0,
        'a' : 0,
        'l' : 0,
        'o' : 0,
        'n' : 0
    }
    textArray.forEach((char, i)=>{
        switch(char){
            case 'b':
                balloonCheck['b']++;
                break;
            case 'a':
                balloonCheck['a']++;
                break;
            case 'l':
                balloonCheck['l']++;
                break;
            case 'o':
                balloonCheck['o']++;
                break;
            case 'n':
                balloonCheck['n']++;
                break;
            default:
            
        }
    })
    let result = 0;
    let balloonExist = true;
    while(balloonExist){
        for (let char in balloonCheck){
            if(char==='l'||char==='o'){
                balloonCheck[char] = balloonCheck[char]-2;
            }else balloonCheck[char]--;
            if(balloonCheck[char]<0) balloonExist=false;
        }
        if(!balloonExist) break;
        result++;
    }
    return result; //1
};