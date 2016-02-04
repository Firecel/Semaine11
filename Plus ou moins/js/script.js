var nb_random = Math.floor(Math.random() * 101);
var bouton = document.getElementById('clickme');
var score = 0;

	bouton.addEventListener('click', function(e){
		e.preventDefault();
		var valeur_saisie = document.getElementById('nb');
		var saisie = parseInt(valeur_saisie.value);

//Réponses               
	if(score < 10) {
		if(saisie < nb_random) {
			document.getElementById('resultat').innerHTML = "C'est plus.";
			score++;
		}
		else if(saisie > nb_random) {
			document.getElementById('resultat').innerHTML = "C'est moins.";
			score++;
		}
		else {
			document.getElementById('resultat').innerHTML = "C'est Gagné !";
			var score_final = 10 - score;
			alert('Le nombre tiré au hasard était : ' + nb_random + '. Votre score est de : ' + score_final);
		}
	}
		else {
			alert('Game over');
		}

		}, false);

//Replay
	var bouton2 = document.getElementById('replay');
		bouton2.addEventListener('click', function(){location.reload();});