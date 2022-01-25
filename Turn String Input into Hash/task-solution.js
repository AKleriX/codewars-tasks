function strToHash(str){
    return JSON.parse("{" + str.replace(/(\w+)=(\d+)/g, (_, key, val) =>  `"${key}":${val}`) + "}");
  }