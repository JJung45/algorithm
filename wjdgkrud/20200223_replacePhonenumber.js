function solution(phone_number) { //01033334444
    var answer = '';

    for(var i=0; i<phone_number.length-4; i++){
        answer+="*";
    }
    answer += phone_number.substr(phone_number.length-4, phone_number.length);

    return answer; // *******4444
}