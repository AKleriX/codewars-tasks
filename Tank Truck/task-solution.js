function tankvol(h, d, vt) {
    let hCyl = 4 * vt / (Math.PI * d * d),
        theta = 2 * h <= d ? Math.acos((d - 2 * h) / d) : Math.acos((2 * h - d) / d),
        sMax = 0.25 * d * d * theta,
        sMin = 0.125 * d * d * Math.sin(2 * theta);
    return 2 * h <= d ? Math.trunc((sMax - sMin) * hCyl) : Math.trunc(vt - (sMax - sMin) * hCyl);
}