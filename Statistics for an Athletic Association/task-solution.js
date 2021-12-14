const stat = (strg) => {
    if (strg.length === 0) return '';
    let runResults = strg.split(',').map((result) => {
            return result.split('|').reverse().reduce((sec, t, i) => sec + (Number(t) * 60**i), 0);
        }),
        range = getRange(runResults),
        average = getAverage(runResults),
        median = getMedian(runResults);
    return `Range: ${convertSecToHoursMinSec(range)} Average: ${convertSecToHoursMinSec(average)} Median: ${convertSecToHoursMinSec(median)}`;
}

const getRange = (nums) => Math.max.apply(null, nums) - Math.min.apply(null, nums);
const getAverage = (nums) => nums.reduce((sum, n) => sum + n) / nums.length;
const getMedian = (nums) => nums.length % 2 ? nums.sort((a,b) => a-b)[Math.trunc(nums.length / 2)]
    : (nums.sort((a,b) => a-b)[nums.length / 2] + nums[(nums.length / 2) - 1]) / 2;
const convertSecToHoursMinSec = (sec) => {
    let seconds = Math.trunc(sec % 60),
        minutes = ((sec % 3600) - (sec % 60)) / 60,
        hours = Math.trunc(sec/3600);
    return `${getZeroCorrect(hours)}|${getZeroCorrect(minutes)}|${getZeroCorrect(seconds)}`;
}

const getZeroCorrect = (num) => num < 10 ? '0' + num : num;