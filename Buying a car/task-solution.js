function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth){
    let months = 0,
        savings = 0;
    while (savings + startPriceOld < startPriceNew){
        months++;
        savings += savingperMonth;
        if (!(months % 2)) percentLossByMonth += 0.5;
        startPriceOld *= ((100 - percentLossByMonth) / 100);
        startPriceNew *= ((100 - percentLossByMonth) / 100);
    }
    return [months, Math.round(savings + startPriceOld - startPriceNew)];
}