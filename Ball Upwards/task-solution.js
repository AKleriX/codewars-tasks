function maxBall(v0) {
    let vms = v0 / 3.6,
        t = 0,
        h = 0;
    while (h <= (vms * t - 0.5 * 9.81 * t * t)){
        h = (vms * t - 0.5 * 9.81 * t * t);
        t = Math.round((t + 0.1) * 10) / 10;
    }
    return (t * 10) - 1;
}