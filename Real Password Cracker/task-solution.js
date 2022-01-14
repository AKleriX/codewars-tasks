function passwordCracker(hash) {
    const crypto = require('crypto'),
          abc = ' abcdefghijklmnopqrstuvwxyz';
    for (let a of abc)
      for (let b of abc)
        for (let c of abc)
          for (let d of abc)
            for (let e of abc)
              if (hash === crypto.createHash('sha1').update(`${a}${b}${c}${d}${e}`.trim()).digest("hex"))
                 return `${a}${b}${c}${d}${e}`.trim();  
   }