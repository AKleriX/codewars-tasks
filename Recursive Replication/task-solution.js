const replicate = (times, number) => (times > 0 ? [number].concat(replicate(--times, number)) : []);
