
var scores, roundScore, activePlayer, gamePlaying;

// Game Initialize
init();


// Work with Roll Dice and Current Score
document.querySelector('.btn-roll').addEventListener('click', function(){
	
	if (gamePlaying) {
		//1. Random Number
		var dice = Math.floor(Math.random() * 6) + 1;

		//2. Display the result
		var diceDom = document.querySelector('.dice');
		diceDom.style.display = 'block';
		diceDom.src = 'dice-' + dice + '.png';

		//3. Update ROund Score IF the rolled number was not 1
		if (dice !== 1) {
			//Add Score
			roundScore += dice;
			document.querySelector('#current-' + activePlayer).textContent = roundScore;
		}else {
			//Next Player
			nextPlayer();

		}
	}

});


// Work with Hold Button and Global Score
document.querySelector('.btn-hold').addEventListener('click', function(){

	if (gamePlaying) {
		// Add Current Score to Global Score
		scores[activePlayer] += roundScore;

		// Update the UI
		document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

		// Check if player on the game
		if (scores[activePlayer] >= 100) {
			document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
			document.querySelector('.dice').style.display = 'none';
			document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
			document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
			gamePlaying = false;
		}else {
			nextPlayer();
		}
	}

});


// // Work with New Game Button
document.querySelector('.btn-new').addEventListener('click', init);


// Change Player
function nextPlayer(){
	activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
	roundScore = 0;
	document.getElementById('current-0').textContent = '0';
	document.getElementById('current-1').textContent = '0';

	// document.querySelector('.player-0-panel').classList.remove('active');
	// document.querySelector('.player-1-panel').classList.add('active');

	document.querySelector('.player-0-panel').classList.toggle('active');
	document.querySelector('.player-1-panel').classList.toggle('active');

	document.querySelector('.dice').style.display = 'none';
}


// Game Initialize
function init(){
	scores = [0,0];
	roundScore = 0;
	activePlayer = 0;
	gamePlaying = true;

	document.querySelector('.dice').style.display = 'none';

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


	// dice = Math.floor(Math.random() * 6) + 1;
	// document.querySelector('#current-' + activePlayer).textContent = dice;
	// document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>'; 
	// var x = document.querySelector('#score-0').textContent;

}




















