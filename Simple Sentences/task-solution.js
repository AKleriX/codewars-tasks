function makeSentence(parts) {
    return parts.reduce((str, part) => /\.|,/.test(part) ? str + part : str + ' ' + part).replace(/\.*$/, '.');
  }