const solution = (participant, completion) => { //([leo, kiki, eden],[eden, kiki]),([marina, josipa, nikola, vinko, filipa],[josipa, filipa, marina, nikola]), ([mislav, stanko, mislav, ana],[stanko, ana, mislav])
    participant.sort();
    completion.sort();
    let result;
    for(let i=0; i<participant.length; i++){
            if(participant[i]!==completion[i]){
                result = participant[i];
                break;
            }
    }
    return result; //leo, vinko, mislav
}