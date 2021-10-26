function goodVsEvil(good, evil){
    let goodPower = good.split(' ').reduce((sum, item, index) => {
            switch (index){
                case 0:
                    return sum + Number(item);
                case 1:
                    return sum + Number(item) * 2;
                case 2:
                    return sum + Number(item) * 3;
                case 3:
                    return sum + Number(item) * 3;
                case 4:
                    return sum + Number(item) * 4;
                case 5:
                    return sum + Number(item) * 10;
                default:
                    return sum;
            }
        }, 0),
        evilPower = evil.split(' ').reduce((sum, item, index) => {
            switch (index){
                case 0:
                    return sum + Number(item);
                case 1:
                    return sum + Number(item) * 2;
                case 2:
                    return sum + Number(item) * 2;
                case 3:
                    return sum + Number(item) * 2;
                case 4:
                    return sum + Number(item) * 3;
                case 5:
                    return sum + Number(item) * 5;
                case 6:
                    return sum + Number(item) * 10;
                default:
                    return sum;
            }
        }, 0);

    console.log(good, goodPower, evil, evilPower);
    if (goodPower === evilPower) return 'Battle Result: No victor on this battle field';
    return goodPower > evilPower ? 'Battle Result: Good triumphs over Evil' : 'Battle Result: Evil eradicates all trace of Good';
}