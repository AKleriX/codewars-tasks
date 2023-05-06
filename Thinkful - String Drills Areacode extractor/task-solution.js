const areaCode = (text) => text.match(/\(\d+\)/)[0].slice(1, -1);
