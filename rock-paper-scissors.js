// game options: rock, paper, scissors
const options = ['r', 'p', 's'];

// function for random selection for the computer player
function computerPlay() {
  let selection = Math.ceil(Math.random() * 3) - 1;
  return options[selection];
}

// play round function which evaluates result and returns an object with message and score
function playRound(playerSelection, computerSelection) {

  switch (playerSelection) {

    // player chose rock
    case 'r':
      console.log('Player chose Rock!');
      if (computerSelection === playerSelection) {
        return {message:"Computer chose rock!! It's a draw.", score:"draw"}
      } else if (computerSelection === 'p') {
        return {message:'Dayum! Computer chose paper. Better luck next time, you lost...', score:"computer"}
      } else {
        return {message:'HOLY WATER! Computer chose scissors! Aaand you won!!!', score:"player"}
      }
      break;

    // player chose paper
    case 'p':
      console.log('Player chose Paper!');
      if (computerSelection === 'r') {
        return {message:"Computer chose rock!! Paper beats rock... for some reason... you won!", score:"player"}
      } else if (computerSelection === 'p') {
        return {message:'Computer chose paper! PAPER DOES NOTHING TO PAPER! Draw.', score:"draw"}
      } else {
        return {message:'Computer just shredded you with its scissors!! You lost...', score:"computer"}
      }
      break;

    // player chose scissors
    case 's':
      console.log('Player chose Scissors!');
      if (computerSelection === 'r') {
        return {message:"Computer chose rock!! Your scissors were served! You lost...", score:"computer"}
      } else if (computerSelection === 'p') {
        return {message:'Computer chose paper! Worst mistake of his life... you won!', score:"player"}
      } else {
        return {message:'Computer chose scissors... draw.', score:"draw"}
      }
      break;
  }
}

// the game function which counts the scores and plays 5 game rounds
function game() {

  // scores variables
  let playerScore = 0;
  let computerScore = 0;

  // game loop of 5 rounds
  for (let i = 0; i < 5; i++) {

    // everyone chooses their option
    const playerSelection = prompt('Choose (r)ock, (p)aper or (s)cissors!').trim().toLowerCase();
    const computerSelection = computerPlay();

    result = playRound(playerSelection, computerSelection);

    // evaluation of recieved object
    console.log(result.message)

    switch (result.score) {
      case "player":
        ++playerScore;
        console.log(playerScore);
        console.log(computerScore);
        break;
      case "computer":
        ++computerScore;
        console.log(playerScore);
        console.log(computerScore);
        break;
      case "draw":
        console.log(playerScore);
        console.log(computerScore);
        break;
      default:
        console.log('hm... sonething went wrong!!')

    console.log(playerSelection);
    console.log(computerSelection);
    }
  }
}

/////////////////////// GAME ///////////////////////
game();
