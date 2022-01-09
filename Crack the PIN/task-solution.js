function crack(hash){
    const crypto = require('crypto');
    for (let i1 = 0; i1 <= 9; i1++)
      for (let i2 = 0; i2 <= 9; i2++)
        for (let i3 = 0; i3 <= 9; i3++)
          for (let i4 = 0; i4 <= 9; i4++)
            for (let i5 = 0; i5 <= 9; i5++)
              if (hash === crypto.createHash('md5').update(`${i1}${i2}${i3}${i4}${i5}`).digest("hex"))
                  return `${i1}${i2}${i3}${i4}${i5}`;  
  }