const extractBits = (field, offset, length) =>
  (field >> offset) - (((field >> offset) >> length) << length);
