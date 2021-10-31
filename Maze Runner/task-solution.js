function mazeRunner(maze, directions) {
    let pointCoord = null;
    for (let i = 0; i < maze.length; i++){
        for (let j = 0; j < maze[i].length; j++)
            if (maze[i][j] === 2){
                pointCoord = [i, j];
                break;
            }
        if (pointCoord) break;
    }
    for (let i = 0; i < directions.length; i++){
        switch (directions[i]){
            case 'N':
                pointCoord[0] -= 1;
                break;
            case 'E':
                pointCoord[1] += 1;
                break;
            case 'S':
                pointCoord[0] += 1;
                break;
            case 'W':
                pointCoord[1] -= 1;
                break;
            default:
                break;
        }
        if (!maze[pointCoord[0]] || maze[pointCoord[0]][pointCoord[1]] === undefined || maze[pointCoord[0]][pointCoord[1]] === 1)
            return 'Dead';
        else if (maze[pointCoord[0]][pointCoord[1]] === 3)
            return 'Finish';
    }
    return 'Lost';
}