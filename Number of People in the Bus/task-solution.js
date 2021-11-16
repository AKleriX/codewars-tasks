var number = function(busStops){
    return busStops.reduce((people, busStop) => people + busStop[0] - busStop[1], 0);
}