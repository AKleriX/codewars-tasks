const encode = (input) => input.replace(/(.)\1*/g, (match) => match.length + match[0]);

const decode = (input) => input.replace(/(\d+)([A-Z])/g, (_, p1, p2) => p2.repeat(+p1));
