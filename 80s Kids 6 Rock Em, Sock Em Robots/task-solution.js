function fight(robot1, robot2, tactics) {
    let firstAttacker,
        secondAttacker;

    if (robot1['speed'] >= robot2['speed']){
        firstAttacker = robot1;
        secondAttacker = robot2;
    }
    else{
        firstAttacker = robot2;
        secondAttacker = robot1;
    }

    let existTactic = (firstAttacker['tactics'].length > 0 || secondAttacker['tactics'].length > 0),
        turn = 0;

    while (existTactic){

        if (turn < firstAttacker['tactics'].length)
            secondAttacker['health'] -= tactics[firstAttacker['tactics'][turn]];

        if (secondAttacker['health'] <= 0) return `${firstAttacker['name']} has won the fight.`;

        if (turn < secondAttacker['tactics'].length)
            firstAttacker['health'] -= tactics[secondAttacker['tactics'][turn]];

        if (firstAttacker['health'] <= 0) return `${secondAttacker['name']} has won the fight.`;

        if (turn >= firstAttacker['tactics'].length && turn >= secondAttacker['tactics'].length)
            existTactic = false;

        turn++;

    }

    if (firstAttacker['health'] > secondAttacker['health']) return `${firstAttacker['name']} has won the fight.`;
    if (firstAttacker['health'] < secondAttacker['health']) return `${secondAttacker['name']} has won the fight.`;

    return `The fight was a draw.`;


}