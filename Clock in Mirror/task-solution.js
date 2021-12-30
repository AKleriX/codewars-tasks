function WhatIsTheTime(timeInMirror){
    let times = timeInMirror.split(':');
    times[0] = (Number(times[1]) ? 11 : 12) - times[0] % 12 || 12;
    times[1] = (60 - Number(times[1])) % 60;
    return times.map(time => time < 10 ? '0' + time : time).join(':');
}