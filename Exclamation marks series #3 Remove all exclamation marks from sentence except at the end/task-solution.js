const remove = (str) => str.replace(/!/g, '') + (str.match(/!+$/g) || [''])[0];
