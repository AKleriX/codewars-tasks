function race(v1, v2, g) {
    if (v2 <= v1) return null;
    let sec = (3600 * g) / (v2 - v1);
    return [Math.trunc(sec / 3600), Math.trunc((sec % 3600) / 60), Math.trunc(sec % 60)];
}