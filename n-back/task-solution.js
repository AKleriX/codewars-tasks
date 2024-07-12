const countTargets = (n, sequence) => sequence.slice(n).filter((d, i) => d === sequence[i]).length;
