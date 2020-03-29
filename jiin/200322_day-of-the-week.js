const dayOfTheWeek = (day, month, year) => { //31,8,2019
    let week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let result = week[new Date(`${year}-${month}-${day}`).getDay()];
    return result; //"Saturday"
};