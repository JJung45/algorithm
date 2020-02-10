function solution(a, b) { //5
    let date = [];
    let days = ['THU','FRI','SAT','SUN','MON','TUE','WED'];
    for(let i=0; i<12; i++){
        let lastDate = ( new Date( 2016, i+1, 0) ).getDate();
        date.push(lastDate);
    }
    let result=0;
    for(let i=0; i<a-1; i++){
        result += date[i];
        console.log(result);
    }
    result = result + b;
    return days[result%7]; //"TUE"
}