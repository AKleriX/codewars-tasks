const showMe = (yourID) => /^[A-Z][a-z]*$/.test(yourID.replace(/-[A-Z]/g, ''));
