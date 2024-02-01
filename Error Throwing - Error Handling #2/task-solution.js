const validateMessage = (msg) => {
  if (typeof msg === 'object' && !msg) throw new ReferenceError('Message is null!');
  else if (typeof msg !== 'string')
    throw new TypeError(`Message should be of type string but was of type ${typeof msg}!`);
  else if (msg.length > 255 || !msg.length)
    throw new RangeError(`Message contains ${msg.length} characters!`);
  return !/<.+>/.test(msg);
};
