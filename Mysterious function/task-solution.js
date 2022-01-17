const getNum = (n) => n.toString().split('')
                      .reduce((holes, num) => /[690]/.test(num) ? holes + 1 : (/8/.test(num) ? holes + 2 : holes), 0);