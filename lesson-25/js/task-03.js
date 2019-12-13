function translateHoursToMinutes(h) {
    result = h * 60;
    console.log(result);
    return result;
}

function translateMinutesToSeconds(min) {
    result = min * 60;
    console.log(result);
    return result;
}

function sumAllSeconds(h = 0, min = 0, sec = 0) {

    result = translateHoursToMinutes(translateMinutesToSeconds(h)) + translateMinutesToSeconds(min) + sec;

    console.log(result);
    return result;
}

sumAllSeconds(2, 30, 30);