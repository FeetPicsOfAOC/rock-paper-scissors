giveEventListenersToInputs();

let playerScore = 0;
let computerScore = 0;

function game(e) {

  const playerSelection = e.target.dataset.choice;
  const computerSelection = computerPlay();

  resultOfRound = playRound(playerSelection, computerSelection);
  if (resultOfRound.winner === 'player') {
    ++playerScore;
  } else if (resultOfRound.winner === 'computer') {
    ++computerScore;
  }
  changeDivText('#resultOfRound', resultOfRound.message);
  displayResultOfRoundInLog(playerSelection, computerSelection, resultOfRound);

  let resultOfGame;
  if (playerScore === 5 || computerScore === 5) {
    if (playerScore > computerScore) {
      resultOfGame = {message: 'You won!! Congratulations!', color: 'green'};
    } else if (playerScore < computerScore) {
      resultOfGame = {message: 'You lost... booo!!', color: 'red'};
    }
    
    showGameResultMessage(resultOfGame);
    playerScore = 0;
    computerScore = 0;
  }

  displayScore(playerScore, computerScore);
}

function computerPlay() {
  const options = ['rock', 'paper', 'scissors'];
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

  if (playerSelection === computerSelection) {
    return {message: "It's a draw!", winner: 'draw'}

  } else if ((playerSelection === 'rock' && computerSelection === 'paper') ||
            (playerSelection === 'paper' && computerSelection === 'scissors') ||
            (playerSelection === 'scissors' && computerSelection === 'rock')) {
    return {message: 'You lost this round!', winner: 'computer'}

  } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
            (playerSelection === 'paper' && computerSelection === 'rock') ||
            (playerSelection === 'scissors' && computerSelection === 'paper')) {
    return {message: 'You win this round!', winner: 'player'}
  }
}

function displayScore(playerScore, computerScore) {
  let scoreMessage = `Your score: ${playerScore}, Computer score: ${computerScore}`;
  changeDivText('#currentScore', scoreMessage);
}

function showGameResultMessage(resultOfGame) {
  changeDivText('#resultOfGame', resultOfGame.message)
  let resultMessage = document.querySelector('#resultOfGame');
  resultMessage.style.color = resultOfGame.color;
}

function displayResultOfRoundInLog(playerSelection, computerSelection, resultOfRound) {
  let newLogItemForPlayer = document.createElement('img');
  let newLogItemForComputer = document.createElement('img');
  let newLogItemForWinners = document.createElement('div');

  newLogItemForPlayer.src = `img/${playerSelection}.webp`; 
  newLogItemForComputer.src = `img/${computerSelection}.webp`;
  newLogItemForPlayer.classList.add('log-item');
  newLogItemForComputer.classList.add('log-item');
  
  let playerLog = document.querySelector('#player-log');
  let computerLog = document.querySelector('#computer-log');
  let winnersLog = document.querySelector('#winners-log');

  playerLog.appendChild(newLogItemForPlayer);
  computerLog.appendChild(newLogItemForComputer);

  let winnerLog;
  let winnerLogClass;
  if (resultOfRound.winner === 'player') {
    winnerLog = 'You won!';
    winnerLogClass = 'log-winner-player';
  } else if (resultOfRound.winner === 'computer') {
    winnerLog = 'You lost!';
    winnerLogClass = 'log-winner-computer';
  } else if (resultOfRound.winner === 'draw') {
    winnerLog = 'Draw!'
    winnerLogClass = 'log-winner-draw';
  }
  newLogItemForWinners.textContent = winnerLog;
  newLogItemForWinners.classList.add(winnerLogClass);
  
  winnersLog.appendChild(newLogItemForWinners);
}

function giveEventListenersToInputs() {
  inputs = document.querySelectorAll('input[type=image]');
  inputs.forEach((input) => {
    input.addEventListener('click', game)
  });
}

