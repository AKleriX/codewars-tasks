function humanReadable(seconds) {
    let hours = 0,
        minutes = 0;

    while (seconds > 59) {
        seconds -= 60;
        minutes++;

        while (minutes > 59) {
            minutes -= 60;
            hours++;
        }
    }

    if (seconds < 10)
        seconds = `0${seconds}`;
    if (minutes < 10)
        minutes = `0${minutes}`;
    if (hours < 10)
        hours = `0${hours}`;

    return `${hours}:${minutes}:${seconds}`;

}