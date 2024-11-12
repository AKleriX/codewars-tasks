const hexToBase64 = (hex) => {
  const buffer = Buffer.from(hex, 'hex');
  return buffer.toString('base64');
};
