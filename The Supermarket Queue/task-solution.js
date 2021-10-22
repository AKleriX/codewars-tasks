let queueTime = (customers, n) => {
    let cassPool = customers.slice(0, n);

    for (let i = n; i < customers.length; i++){
        let mimTimeCassIndex = cassPool.indexOf(Math.min.apply(null, cassPool));
        cassPool[mimTimeCassIndex] +=  customers[i];
    }

    return customers.length === 0 ? 0: Math.max.apply(null, cassPool);
}
