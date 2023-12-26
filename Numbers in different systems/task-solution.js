const sysNums = (n, sys) => (/^\d+$/.test(n.toString(sys)) ? +n.toString(sys) : n.toString(sys));
