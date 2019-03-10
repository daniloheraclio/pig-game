/*
GAME RULES
- The game has 2 players
- In each turn, a player rolls a dice as many he wishes. Each result get added to his ROUND
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLOBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

var scores, roundScore, activePlayer;

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

//add event listener to roll button using click event and anonymous function
document.querySelector('.btn-roll').addEventListener('click', () => {

  // 1. Generate random number between 1 and 6
  var dice = Math.floor(Math.random() * 6) + 1;

  // 2. Display the result
    // First we need show the dice. For that we gonna store the img in a variable
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display = 'block';
    // Associate the random number to the dice image
  diceDOM.src = `img/dice-${dice}.png`;
    // .textContent work just with plain text
  document.querySelector('#current-' + activePlayer).textContent = dice;

  // 3. Update the round IF the rolled number was NOT a 1
  if(dice !== 1) {
    // Increment score to current player
    roundScore += dice;
    document.querySelector('#current-' + activePlayer).textContent = roundScore;
  } else {
    nextPlayer();
  }
})

// implementing Hold btn
document.querySelector('.btn-hold').addEventListener('click', () => {
  
  var diceDom = document.querySelector('.dice');
  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  // Check if player won the game
  if(scores[activePlayer] >= 20) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    
    // Remove active and add winner class
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner'); 
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active'); 
   

    // Hiding dice
    diceDom.style.display = 'none';
  } else {
    // Hiding dice
    diceDom.style.display = 'none';

    // next player
    nextPlayer();
  }
  
  

})

function nextPlayer() {
    // changing player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

    // reseting round score for both players
    roundScore = 0;
    document.querySelector('#current-0').textContent = roundScore;
    document.querySelector('#current-1').textContent = roundScore;
  
    // Toggle class active to active player
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function gameOver() {

}