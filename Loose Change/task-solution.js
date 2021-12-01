function looseChange(cents){
    let coins = {
        'Nickels': 0,
        'Pennies': 0,
        'Dimes': 0,
        'Quarters':0
    };

    if (cents > 0){
        cents = Math.floor(cents);
        coins['Quarters'] = Math.trunc(cents/25);
        cents %= 25;
        coins['Dimes'] = Math.trunc(cents/10);
        cents %= 10;
        coins['Nickels'] = Math.trunc(cents/5);
        cents %= 5;
        coins['Pennies'] = cents;
    }
    return coins;
}