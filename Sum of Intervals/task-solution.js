function sumIntervals(intervals){
    let distArr = [];

    intervals.forEach((interval) => {
        for (let i = interval[0]; i < interval[1]; i++)
            distArr.push(i);
    });

    return [...new Set(distArr)].length;
}