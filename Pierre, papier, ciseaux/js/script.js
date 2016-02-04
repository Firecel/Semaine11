var computerScore = 0
var playerScore = 0
	
// INSERT SCORES
var playerScoreBox = document.getElementById('playerScore');
var computerScoreBox = document.getElementById('computerScore');
	
	playerScoreBox.innerHTML = computerScore;
	computerScoreBox.innerHTML = playerScore;
	
var playerChoice = document.getElementById('playerChoice');
var computerChoice = document.getElementById('computerChoice')


	function compare(choice1, choice2) {
		choice2 = Math.random();
		if (choice2 < 0.34) {
		    choice2 = "rock";
		} else if(choice2 <= 0.67) {
		    choice2 = "paper";
		} else {
			choice2 = "scissors";
		}
		
		playerChoice.innerHTML = choice1;
		computerChoice.innerHTML = choice2;
		
//Egalité			    
	    if (choice1 == choice2) {
	        return false;
	    }
		
//Choix Pierre
	    if (choice1 == "rock") {
	    	if (choice2 == "scissors") {
	 
	            playerScore++;         
	        }
	        else {
	            computerScore++;
	        }
	        return updateScores();
	    }
		
//Choix Feuille
	    if (choice1 == "paper") { 	
	        if (choice2 == "rock") {
	            playerScore++;
	        }
	        else {
	            computerScore++;
	        }
	        return updateScores();
	    }
		
//Choix ciseaux
	    if (choice1 == "scissors") {
	    
	        if (choice2 == "rock") {
	            computerScore++;
	        }
	        else {
	            playerScore++;
	        }
	        return updateScores();
	    }
	}
	
//Affichage scores
	function updateScores() {
		playerScoreBox.innerHTML = playerScore;
		computerScoreBox.innerHTML = computerScore;
	}
	
	//console.log('computer choose ' + computerChoice);
	
	//compare(userChoice, computerChoice);
	
//Replay
var bouton2 = document.getElementById('replay');
	bouton2.addEventListener('click', function(){location.reload();});
	