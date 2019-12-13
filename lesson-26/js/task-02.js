let time = {
    hours: 12,
    minutes: 30,
    seconds: 55,
}


function displayTime() {
    console.log(`${time.hours} : ${time.minutes} : ${time.seconds}`);
}


function convertSecondToMinutes(s) {
    result = Math.floor(s / 60);

    return result;
}

function convertMinuteToHours(min) {
    result = Math.floor(min / 60);

    return result;
}

function changeTimeIfAddSeconds(sec) {
    let seconds = (time.seconds + sec) % 60;
    let minutes = (time.minutes + convertSecondToMinutes(time.seconds + sec)) % 60;
    let hours = time.hours + convertMinuteToHours(time.minutes + convertSecondToMinutes(time.seconds + sec));

    return (time.seconds = seconds, time.minutes = minutes, time.hours = hours);
}

function changeTimeIfAddMinutes(min) {
    let minutes = (time.minutes + min) % 60;
    let hours = time.hours + convertMinuteToHours(time.minutes + min);

    return (time.minutes = minutes, time.hours = hours);
}

displayTime();