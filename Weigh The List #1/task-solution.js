const weights = (a) => a.map((_, i, arr) => (i % 2 ? -arr[i - 1] : arr[i + 1]));
