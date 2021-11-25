function alphabetWar(fight)
{
    fight = fight.replace(/([^*]\*[^*])|(\*[^*])|([^*]\*)/g, '');
    let rightCount = 0,
        leftCount = 0;
    fight.split('').forEach(l => {
        switch(l){
            case 'w':
                leftCount += 4;
                break;
            case 'p':
                leftCount += 3;
                break;
            case 'b':
                leftCount += 2;
                break;
            case 's':
                leftCount += 1;
                break;
            case 'm':
                rightCount += 4;
                break;
            case 'q':
                rightCount += 3;
                break;
            case 'd':
                rightCount += 2;
                break;
            case 'z':
                rightCount += 1;
                break;
            default:
                break;
        }
    });
    if (rightCount === leftCount) return "Let's fight again!";
    return rightCount > leftCount ? "Right side wins!" : "Left side wins!";
}