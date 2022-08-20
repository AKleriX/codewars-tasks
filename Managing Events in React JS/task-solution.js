import React from 'react';

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { counter: 0 };
  }

  changeCounter(sign) {
    this.setState({ counter: this.state.counter + sign });
  }

  // Your event handlers
  render() {
    return (
      <div>
        <h1 id="counter">{this.state.counter}</h1>
        <button type="button" id="decrement" onClick={() => this.changeCounter(-1)}>
          Decrement
        </button>
        <button type="button" id="increment" onClick={() => this.changeCounter(1)}>
          Increment
        </button>
      </div>
    );
  }
}
