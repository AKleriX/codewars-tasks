const askForMissingDetails = (list) => {
  return list.filter(dev => {
    for (let prop in dev)      
      if (!dev[prop]){
        dev.question = `Hi, could you please provide your ${prop}.`
        return true;
      };
    return false;
  });
};