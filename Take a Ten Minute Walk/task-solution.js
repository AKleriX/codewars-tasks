function isValidWalk(walk) {
    return walk.length === 10 &&
        (walk.filter(i => i === 'n').length === walk.filter(i => i === 's').length) &&
        (walk.filter(i => i === 'e').length === walk.filter(i => i === 'w').length);
}