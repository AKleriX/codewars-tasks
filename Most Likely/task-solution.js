const mostLikely = (prob1, prob2) => prob1.split(':').reduce(div) > prob2.split(':').reduce(div);

const div = (n, d) => +n / +d;
