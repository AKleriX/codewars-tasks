const invertHash = (hash) => Object.entries(hash).reduce((r, d) => ((r[d[1]] = d[0]), r), {});
