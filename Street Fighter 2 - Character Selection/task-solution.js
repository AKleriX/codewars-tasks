function streetFighterSelection(fighters, position, moves){
    let queueSelectedFighters = [];
    moves.forEach(move => {
        switch (move) {
            case 'up':
                if (fighters[position[0] - 1])
                    position[0] -= 1;
                break;
            case 'left':
                if (!fighters[position[0]][position[1] - 1])
                    position[1] = fighters[position[0]].length - 1;
                else position[1] -= 1;
                break;
            case 'right':
                if (!fighters[position[0]][position[1] + 1])
                    position[1] = 0;
                else position[1] += 1;
                break;
            case 'down':
                if (fighters[position[0] + 1])
                    position[0] += 1;
                break;
            default:
                break;
        }
        queueSelectedFighters.push(fighters[position[0]][position[1]]);
    });
    return queueSelectedFighters;
}