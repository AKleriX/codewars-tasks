import React from 'react';

export const EggList = (props) => (
  <ul>
    {props.eggs.map((e, i) => (
      <EasterEgg name={e} key={i} />
    ))}
  </ul>
);

export const EasterEgg = (props) => <li key={props.key}>{props.name}</li>;
