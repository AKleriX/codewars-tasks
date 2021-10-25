function sqInRect(lng, wdth){
    let sq = [];
    while (lng !== wdth) {
        let [maxSide, minSide] = [Math.max(lng, wdth), Math.min(lng, wdth)];
        sq.push(minSide);
        maxSide -= minSide;
        [lng, wdth] = [maxSide, minSide];
    }
    sq.push(wdth);
    return sq.length > 1 ? sq : null;
}