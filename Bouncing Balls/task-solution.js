function bouncingBall(h,  bounce,  window) {
    if (h > 0 && (bounce > 0 && bounce < 1) && window < h){
        let ballCount = 0;
        while (h > window){
            ballCount++;
            h = h * bounce;
            if (h > window)
                ballCount++;
        }
        return ballCount;
    }
    return -1;
}