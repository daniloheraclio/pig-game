/*
GAME RULES
- The game has 2 players
- In each turn, a player rolls a dice as many he wishes. Each result get added to his ROUND
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer, gamePlaying;
gamePlaying = false;
var finalScore = document.querySelector('.final-score');
init();

//add event listener to roll button using click event and anonymous function
document.querySelector('.btn-roll').addEventListener('click', () => {
//checking if gameplay is true
if(gamePlaying) {
  // 1. Generate random number between 1 and 6
  var dice = Math.floor(Math.random() * 6) + 1;
  
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
  diceDOM.src = `img/dice-${dice}.png`;
  document.querySelector('#current-' + activePlayer).textContent = dice;

  if(dice !== 1) {
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
}
  
})

document.querySelector('.btn-hold').addEventListener('click', () => {
  // checking if the gameplaying is true
  if(gamePlaying) {
    var diceDom = document.querySelector('.dice');
  scores[activePlayer] += roundScore;

  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  if(scores[activePlayer] >= finalScore.value) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    
    gamePlaying = false;
    
   

    diceDom.style.display = 'none';
  } else {
    diceDom.style.display = 'none';

    nextPlayer();
  }
  }

})

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // reseting round score for both players
    roundScore = 0;
    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;
  
    // Toggle class active to active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

document.querySelector('.btn-new').addEventListener('click', init);

function init() {
  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;

  // start game without showing the dice
  document.querySelector('.dice').style.display = 'none';

  // setting the initial values
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';

  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');

  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');

  document.querySelector('.player-0-panel').classList.add('active');
}

document.querySelector('.btn-new').addEventListener('click', () => {
  gamePlaying ? gamePlaying = false : gamePlaying = true;
})

function rollDice() {
  
  let res = setInterval(() => 'hello', 10);
  console.log(res);
}

