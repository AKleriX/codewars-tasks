const React = require('react');

class WishlistForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: '', wish: '', priority: 1 };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleWishChange = this.handleWishChange.bind(this);
    this.handlePriorityChange = this.handlePriorityChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }

  handleWishChange(e) {
    this.setState({ wish: e.target.value });
  }

  handlePriorityChange(e) {
    this.setState({ priority: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.send(this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="name">Name: </label>
        <input type="text" id="name" value={this.state.name} onChange={this.handleNameChange} />
        <br />
        <label htmlFor="wish">Wish: </label>
        <textarea
          id="wish"
          rows="10"
          cols="10"
          value={this.state.wish}
          onChange={this.handleWishChange}
        />
        <br />
        <label htmlFor="priority">Wish Priority: </label>
        <select id="priority" value={this.state.priority} onChange={this.handlePriorityChange}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    );
  }
}
