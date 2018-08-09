var feu = document.getElementById("moveFeu");
var eau = document.getElementById("moveEau");
var plante = document.getElementById("movePlante");
var victoire = 0;
var scorePlayer = 0;
var scoreBot = 0;
var btn = document.getElementById("dialogueButton");
var btn2 = document.getElementById("dialogueButton2");
document.getElementById("pseudo").style.display = "none";
btn.addEventListener("click", dialogueIntro);
document.getElementById("divAdverse").style.display = "none";
document.getElementById("divJoueur").style.display = "none";
document.getElementById("joueurManicien").style.display = "none";
document.getElementById("botManicien").style.display = "none";
document.getElementById("dialogueButton2").style.display = "none";

var rank;




// Fonction qui permet d'afficher des dialogues pour le joueurs.
function dialogueIntro() {
  document.getElementById("premPara").innerHTML = "Vois-tu la barre en bas à gauche ? \
  C'est ta barre de Manicien, une fois remplie tu as gagnés la partie. Celle en haut à droite est celle de ton adversaire, une fois la sienne remplie, il gagne la partie.";
  btn.value = "D'accord";
  document.getElementById("joueurManicien").style.display = "block";
  document.getElementById("botManicien").style.display = "block";
  btn.addEventListener("click", dialogueRune);
}

function dialogueRune() {
  document.getElementById("premPara").innerHTML = "Tu as 3 runes magics dans la partie. Le \"Feu\", \"L'eau\", la \"Plante\". Le feu gagne contre la plante et perd contre l'eau. L'eau perd contre la plante. Tu as compris ?";
  document.getElementById("dialogueButton2").style.display = "inline-block";
  btn.value = "Compris";
  btn2.value = "What ?!"
  btn.addEventListener("click", dialogueTerrain);
  btn2.addEventListener("click", dialogueRuneIop)
}

function dialogueRuneIop() {
  document.getElementById("premPara").innerHTML = "Le feu gagne sur la plante. L'eau gagne contre le feu. La plante gagne sur l'eau. Ce n'est pourtant pas si compliqué cervelle de Iop !!";
  btn2.style.display = "none";
  btn.value = "Ah oui !";
  btn.addEventListener("click", dialogueTerrain);
}

function dialogueTerrain() {
  document.getElementById("premPara").innerHTML = "Voici les runes magics qui viennent d'apparaître. En bas est ton terrain de jeu, en haut est celui de l'adversaire.";
  btn2.style.display = "none";
  btn.value = "Compris";
  document.getElementById("divJoueur").style.display = "grid";
  document.getElementById("container").classList.add("bg");
  btn.addEventListener("click", dialogueName);
}

function dialogueName() {
  document.getElementById("premPara").innerHTML = "Au fait je ne connais même pas ton nom ?";
  btn2.style.display = "none";
  btn.value = "Tiens";
  document.getElementById("pseudo").style.display = "inline-block";
  btn.addEventListener("click", dialogueCombat);
}

function dialogueCombat() {
  var pseudo = document.getElementById("pseudo").value;
  document.getElementById("premPara").innerHTML = "Ah ! Très joli prénom " + pseudo + ". C'est l'heure du Duuuuuuuel !";
  document.getElementById("pseudo").style.display = "none";
  btn2.style.display = "none";
  btn.value = "Go !";
  btn.addEventListener("click", displayDialogue);
  if (victoire >= 0) {
    rank = " Apprentie";
  }
  if (victoire >= 3) {
    rank = " Initié";
  }
  if (victoire >= 6) {
    rank = " Érudit";
  }
  if (victoire >= 9) {
    rank = " Mage";
  }
  if (victoire >= 12) {
    rank = " Archimage";
  }
  if (victoire >= 15) {
    rank = " Maître";
  }
  document.getElementById("affichePseudo").innerHTML = pseudo + rank + " Webicien";
}



function displayDialogue() {
  document.getElementById("dialogue").style.display = "none";
  document.getElementById("divAdverse").style.display = "grid";
}










//Function qui est déclarer en fonction du choix du joueur.






function myMoveFeu() {
  var pos = 0;
  var id = setInterval(frame, 1);
  var posReturn = 0;

  function frame() {
    if (posReturn === 150) {
      clearInterval(id);
    } else {
      posReturn -= 3;
      feu.style.bottom = posReturn + 'px';
      feu.style.left = posReturn + 'px';
    }
    if (pos === 150) {
      clearInterval(id);
    } else {
      posReturn += 3;
      pos += 3;
      feu.style.bottom = pos + 'px';
      feu.style.left = pos + 'px';
    }

  }
  choiceBot();
  calculJeuFeu();
  endGame();
}






function myMoveEau() {
  var pos = 0;
  var posReturn = 0;
  var id = setInterval(frame, 1);

  function frame() {
    if (posReturn === 150) {
      clearInterval(id);
    } else {
      posReturn -= 3;
      eau.style.bottom = posReturn + 'px';
    }
    if (pos === 150) {
      clearInterval(id);
    } else {
      pos += 3;
      posReturn += 3;
      eau.style.bottom = pos + 'px';
    }
  }
  choiceBot();
  calculJeuEau();
  endGame();
}






function myMovePlante() {
  var pos = 0;
  var posReturn = 0;
  var id = setInterval(frame, 1);

  function frame() {
    if (posReturn === 150) {
      clearInterval(id);
    } else {
      posReturn -= 3;
      plante.style.bottom = posReturn + 'px';
      plante.style.right = posReturn + 'px';
    }
    if (pos === 150) {
      clearInterval(id);
    } else {
      pos += 3;
      posReturn += 3;
      plante.style.bottom = pos + 'px';
      plante.style.right = pos + 'px';
    }
  }
  choiceBot();
  calculJeuPlante();
  endGame();
}




var elemBot = ["Feu", "Eau", "Plante"];
var randBot = elemBot[Math.floor(Math.random() * elemBot.length)];
// Fonction qui permet au bot de joueur.






function choiceBot() {
  elemBot = ["Feu", "Eau", "Plante"];
  randBot = elemBot[Math.floor(Math.random() * elemBot.length)];
  var feuBot = document.getElementById("feuBot");
  var eauBot = document.getElementById("eauBot");
  var planteBot = document.getElementById("planteBot");

  var pos = 0;
  var posReturn = 0;
  var id = setInterval(frame, 1);

  function frame() {
    if (randBot === "Feu") {
      if (posReturn === 150) {
        clearInterval(id);
      } else {
        posReturn -= 3;
        feuBot.style.top = posReturn + 'px';
        feuBot.style.left = posReturn + 'px';
      }
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos += 3;
        posReturn += 3;
        feuBot.style.top = pos + 'px';
        feuBot.style.left = pos + 'px';
      }
    }
    if (randBot === "Eau") {
      if (posReturn === 150) {
        clearInterval(id);
      } else {
        posReturn -= 3;
        eauBot.style.top = posReturn + 'px';
      }
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos += 3;
        posReturn += 3;
        eauBot.style.top = pos + 'px';
      }
    }
    if (randBot === "Plante") {
      if (posReturn === 150) {
        clearInterval(id);
      } else {
        posReturn -= 3;
        planteBot.style.top = posReturn + 'px';
        planteBot.style.right = posReturn + 'px';
      }
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos += 3;
        posReturn += 3;
        planteBot.style.top = pos + 'px';
        planteBot.style.right = pos + 'px';
      }
    }
  }
}





//Les fonctions suivantes "calcul" les points en fonction des choix (utilisateur et bot)
function calculJeuFeu() {
  if (randBot === "Plante") {
    scorePlayer++;
    progressPlayer();
  } else if (randBot === "Eau") {
    scoreBot++;
    progressBot();
  }
}

function calculJeuEau() {
  if (randBot === "Feu") {
    scorePlayer++;
    progressPlayer();
  } else if (randBot === 'Plante') {
    scoreBot++;
    progressBot();
  }
}

function calculJeuPlante() {
  if (randBot === "Feu") {
    scoreBot++;
    progressBot();
  } else if (randBot === "Eau") {
    scorePlayer++;
    progressPlayer();
  }
}




//Fonction qui gère le end game.
function endGame() {
  if (scorePlayer === 3) {
    if (victoire == 15) {
      document.getElementById("dialogue").style.display = "block";
      document.getElementById("title").innerHTML = "Maître Webicien";
      document.getElementById("premPara").innerHTML = "On dirait bien que tu as atteint le rang de Maître, félicitation. Ça été un plaisir pour moi de te former.";
      btn.value = "Merci !";
    } else {
      pseudo = document.getElementById("pseudo").value;
      document.getElementById("dialogue").style.display = "block";
      document.getElementById("title").innerHTML = "VICTOIRE";
      document.getElementById("premPara").innerHTML = "On dirait bien que l'" + rank + " dépasse le Maître ...";
      btn.value = "Yes !";
      btn.addEventListener("click", reloadPage);
      victoire++;
    }
  } else if (scoreBot === 3) {
    document.getElementById("dialogue").style.display = "block";
    document.getElementById("title").innerHTML = "DÉFAITE";
    document.getElementById("premPara").innerHTML = "Ah ah " + pseudo + " tu as encore des progrès à faire avant de me battre !";
    btn.value = "*snif*";
    btn.addEventListener("click", reloadPage);
  }
}

function progressPlayer() {
  var progress = document.getElementById("progressJoueur");
  progress.value = scorePlayer;
}

function progressBot() {
  var progress = document.getElementById("progressBot");
  progress.value = scoreBot;
}

function reloadPage() {
  scoreBot = 0;
  scorePlayer = 0;
  progressBot();
  progressPlayer();
}

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
  document.getElementById("container").style.display = "none";
  alert("Vous utilisez actuellement un mobile, le site est optimisé pour le format desktop.");
}
