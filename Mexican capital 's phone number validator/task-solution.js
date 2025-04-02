const isValidMXPhoneNumber = (str) =>
  /^(?:\((55|56)\)\s?|55\s?|56\s?)(?:\d{2}\s?\d{2}\s?\d{2}|\d{2}\s?\d{4}|\d{6})$/.test(str);
