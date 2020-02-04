function playRound(playerSelection, computerSelection) {
  // your code here!
  const p = playerSelection.toLowerCase();
  const c = computerSelection.toLowerCase();
  if ((p === 'rock' && c === 'paper') || (p === 'rock' && c === 'scissor'))
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  if (p === c) return `The game has tied! Play again!`;
  if (p === 'paper' && c === 'rock')
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  if (p === 'scissors' && c === 'paper')
    return `You Win! ${playerSelection} beats ${computerSelection}`;
  else return `You Lose! ${computerSelection} beats ${playerSelection}`;
}

function computerPlay() {
  const possibilities = ['Rock', 'Paper', 'Scissors'];
  return possibilities[Math.floor(Math.random() * possibilities.length)];
}

function game() {
  for (let i = 0; i < 5; i++) {
    const result = prompt(
      `Welcome to Rock Paper Scissor! Choose one of Rock, Paper or Scissor`
    );
    const computerSelection = computerPlay();
    console.log(playRound(result, computerSelection));
  }
}

game();
