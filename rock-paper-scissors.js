giveEventListenersToButtons();

let playerScore = 0;
let computerScore = 0;

function game(e) {

  const playerSelection = e.target.value;
  const computerSelection = computerPlay();

  resultOfRound = playRound(playerSelection, computerSelection);
  switch (resultOfRound.winner) {
    case 'player':
      ++playerScore;
      break;
    case 'computer':
      ++computerScore;
      break;
    case 'draw':
      break;
    default:
      console.log('hm... sonething went wrong!!');
      break;
  }

  if (playerScore === 5 || computerScore === 5) {
    resultOfGame = gameResult(playerScore, computerScore);
    changeDivText('#resultOfGame', resultOfGame)
    playerScore = 0;
    computerScore = 0;
  }

  changeDivText('#resultOfRound', resultOfRound.message)
  displayScore(playerScore, computerScore);
}

function computerPlay() {
  const options = ['r', 'p', 's'];
  let selection = Math.ceil(Math.random() * 3) - 1;
  return options[selection];
}

// utility function that is used for changing content of divs
function changeDivText(idOfSelectedDiv, divTextContent) {
  selectedDiv = document.querySelector(`${idOfSelectedDiv}`);
  selectedDiv.textContent = `${divTextContent}`;
}

// play round function which evaluates result and returns an object with a message and a score
function playRound(playerSelection, computerSelection) {

  switch (playerSelection) {

    case 'r':
      changeDivText('#playerChoice', 'Player chose rock!');
      if (computerSelection === playerSelection) {
        return {message:"Computer chose rock!! It's a draw.", winner:'draw'}
      } else if (computerSelection === 'p') {
        return {message:'Dayum! Computer chose paper. Better luck next time, you lost...', winner:'computer'}
      } else {
        return {message:'HOLY WATER! Computer chose scissors! Aaand you won!!!', winner:'player'}
      }
      break;

    case 'p':
      changeDivText('#playerChoice', 'Player chose paper!');
      if (computerSelection === 'r') {
        return {message:'Computer chose rock!! Paper beats rock... for some reason... you won!', winner:'player'}
      } else if (computerSelection === 'p') {
        return {message:'Computer chose paper! PAPER DOES NOTHING TO PAPER! Draw.', winner:'draw'}
      } else {
        return {message:'Computer just shredded you with its scissors!! You lost...', winner:'computer'}
      }
      break;

    case 's':
      changeDivText('#playerChoice', 'Player chose scissors!');
      if (computerSelection === 'r') {
        return {message:'Computer chose rock!! Your scissors were served! You lost...', winner:'computer'}
      } else if (computerSelection === 'p') {
        return {message:'Computer chose paper! Worst mistake of his life... you won!', winner:'player'}
      } else {
        return {message:'Computer chose scissors... draw.', winner:'draw'}
      }
      break;
  }
}

function gameResult (playerScore, computerScore) {
  if (playerScore > computerScore) {
    return 'You won!! Congratulations!'
  } else if (playerScore < computerScore) {
    return 'You lost... booo!!'
  } else {
    return "It's a draw..."
  }
}

function displayScore(playerScore, computerScore) {
  scoreMessage = `Your score: ${playerScore}, Computer score: ${computerScore}`;
  changeDivText('#currentScore', scoreMessage)
}

function giveEventListenersToButtons() {
  btn = document.querySelectorAll('button');
  btn.forEach((button) => {
    button.addEventListener('click', game)
  });
}

