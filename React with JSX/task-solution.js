let React = require('react');

// let us know who your three favorite codewarriors are!
// mantain this format, but choose any three users you want:
// <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>
const myHeader = <h1>My three favorite codewarriors are noLan, jhoffner and OverZealous</h1>;

const CodewarsLink = React.createClass({
  render: function () {
    return <a href={'http://www.codewars.com/users/' + this.props.user}>{this.props.user}</a>;
  },
});

const Leaderboard = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.leaders.map((lead) => (
          <CodewarsLink user={lead} key={lead} />
        ))}
      </div>
    );
  },
});
