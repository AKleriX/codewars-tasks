const money_value = (s) => +s.replace(/[^-.\d]/g, '') || 0.0;