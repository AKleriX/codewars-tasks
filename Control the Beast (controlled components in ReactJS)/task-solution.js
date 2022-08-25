const React = require('react');

class Beast extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: props.name !== undefined ? props.name : 'Yeti' };
  }

  setName(e) {
    this.setState({ name: e.target.value });
  }

  render() {
    return (
      <form>
        <textarea
          id={'controlledName'}
          value={this.state.name}
          onChange={this.setName.bind(this)}
        />
      </form>
    );
  }
}
