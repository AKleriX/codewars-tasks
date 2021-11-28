function bingo(ticket, win){
    return ticket.filter(arr => arr[0].split('').some(l => l.charCodeAt() === arr[1])).length >= win ? 'Winner!' : 'Loser!';
}