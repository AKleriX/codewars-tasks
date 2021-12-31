function Automaton()
{
    this.states = {
        'q1': ['q1', 'q2'],
        'q2': ['q3', 'q2'],
        'q3': ['q2', 'q2']
    };
}

Automaton.prototype.readCommands = function(commands)
{
    // Return true if we end in our accept state, false otherwise.
    return 'q2' === commands.reduce((currentState, com) => this.states[currentState][com], 'q1');
}

var myAutomaton = new Automaton();

// Do anything necessaryto set up your automaton's states, q1, q2, and q3.