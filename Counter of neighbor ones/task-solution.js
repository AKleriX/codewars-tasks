const onesCounter = (input) => (input.join('').match(/1+/g) || []).map((o) => o.length);
