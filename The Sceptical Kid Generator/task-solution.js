const AlanAnnoyingKid = (input) => {
  let match = input.match(/Today I (didn't )?(\w+)(.*)\./),
    [_, negation, verb, object] = match,
    baseVerb = negation ? verb : verb.replace(/ed$/, '');

  return `I don't think you ${negation || ''}${verb}${object} today, I think you ${
    negation ? 'did' : "didn't"
  } ${baseVerb}${negation ? ' it' : ' at all'}!`;
};
