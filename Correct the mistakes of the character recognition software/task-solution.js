const correct = (string) => string.replace(/(5|1|0)/g, (_, p) => p === '5' ? 'S' : (p === '1' ? 'I' : 'O'));