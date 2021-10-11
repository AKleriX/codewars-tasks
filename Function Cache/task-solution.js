function cache(func) {
    let cacheData = {};

    return function() {
        var key = JSON.stringify(arguments);
        if (!(key in cacheData)) {
            cacheData[key] = func.apply(null, arguments);
        }
        return cacheData[key];
    };
}