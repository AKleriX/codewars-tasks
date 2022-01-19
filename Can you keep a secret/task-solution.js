const createSecretHolder = (secret)  => {
    let secretVal = secret
    return ({
      getSecret: () => secretVal,
      setSecret: (newSecret) => secretVal = newSecret 
    });
  };