function alphabetWar(fight)
{
    let rightPower = 0,
        leftPower = 0,
        fightArr = fight.split('');

    fightArr.forEach((item, index) => {
        switch (item) {
            case 'w':
                if (pristCheck(index, fight, 'left'))
                    rightPower += 4;
                else leftPower += 4;
                break;
            case 'p':
                if (pristCheck(index, fight, 'left'))
                    rightPower += 3;
                else leftPower += 3;
                break;
            case 'b':
                if (pristCheck(index, fight, 'left'))
                    rightPower += 2;
                else leftPower += 2;
                break;
            case 's':
                if (pristCheck(index, fight, 'left'))
                    rightPower += 1;
                else leftPower += 1;
                break;
            case 'm':
                if (pristCheck(index, fight, 'right'))
                    leftPower += 4;
                else rightPower += 4;
                break;
            case 'q':
                if (pristCheck(index, fight, 'right'))
                    leftPower += 3;
                else rightPower += 3;
                break;
            case 'd':
                if (pristCheck(index, fight, 'right'))
                    leftPower += 2;
                else rightPower += 2;
                break;
            case 'z':
                if (pristCheck(index, fight, 'right'))
                    leftPower += 1;
                else rightPower += 1;
                break;
            default:
                break;
        }
    });

    if (rightPower === leftPower) return "Let's fight again!";

    return rightPower > leftPower ? 'Right side wins!' : 'Left side wins!';
}

function pristCheck(index, fight, side){

    let prists = side === 'left' ? ['t', 'j'] : ['j', 't'];

    if (index === 0){
        if (fight[index + 1] === prists[1])
            return true;
    }

    return fight.slice(index - 1, index + 2).indexOf(prists[0]) === -1 &&
        fight.slice(index - 1, index + 2).indexOf(prists[1]) !== -1;


}