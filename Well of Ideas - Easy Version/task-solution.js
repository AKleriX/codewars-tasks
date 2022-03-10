function well(x) {
  let goodIdeasCounter = x.reduce((counter, idea) => (idea === 'good' ? counter + 1 : counter), 0);
  return goodIdeasCounter > 2 ? 'I smell a series!' : goodIdeasCounter > 0 ? 'Publish!' : 'Fail!';
}
