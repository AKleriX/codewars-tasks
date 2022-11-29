const solution = (string, limit) => string.slice(0, limit) + (string.length > limit ? '...' : '');
