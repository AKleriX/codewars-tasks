const attackEffect = {
    'fire grass': 2,
    'grass fire': 0.5,
    'fire water': 0.5,
    'water fire': 2,
    'fire electric': 1,
    'electric fire': 1,
    'water grass': 0.5,
    'grass water': 2,
    'water electric': 0.5,
    'electric water': 2,
    'grass electric': 1,
    'electric grass': 1
};

const calculateDamage = (yourType, opponentType, attack, defense) =>  50 * (attack / defense) *
    (yourType === opponentType ? 0.5 : attackEffect[`${yourType} ${opponentType}`]);
