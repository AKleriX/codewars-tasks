const React = require('react');

const createElement = (content, tag = 'div', props = {}) =>
  React.createElement(tag, props, content);

const createUnorderedList = (list) =>
  React.createElement(
    'ul',
    {},
    list.map((n, i) => React.createElement('li', { key: i }, n)),
  );
