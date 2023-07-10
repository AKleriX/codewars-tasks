const isValidHKPhoneNumber = (s) => /^\d{4} \d{4}$/.test(s);

const hasValidHKPhoneNumber = (s) => /\d{4} \d{4}/.test(s);
