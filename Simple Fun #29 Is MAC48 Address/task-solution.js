const isMAC48Address = (inputString) => /^([\dA-F]{2}-){6}$/.test(inputString + '-');
