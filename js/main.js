var feu = document.getElementById("moveFeu");
var eau = document.getElementById("moveEau");
var plante = document.getElementById("movePlante");

var scorePlayer = 0;
var scoreBot = 0;
var btn = document.getElementById("dialogueButton");
var btn2 = document.getElementById("dialogueButton2");
var pseudo = document.getElementById("pseudo").value;
document.getElementById("pseudo").style.display = "none";
btn.addEventListener("click", dialogueIntro);
document.getElementById("divAdverse").style.display = "none";
document.getElementById("divJoueur").style.display = "none";
document.getElementById("posterMatch").style.display = "none";
document.getElementById("joueurManicien").style.display = "none";
document.getElementById("botManicien").style.display = "none";
document.getElementById("dialogueButton2").style.display = "none";

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
  if (btn.addEventListener("click", dialogueTerrain)) {
    dialogueTerrain();
  }
  if (btn2.addEventListener("click", dialogueRuneIop)) {
    dialogueRuneIop();
  }
}

function dialogueRuneIop() {
  document.getElementById("premPara").innerHTML = "Le feu gagne sur la plante. L'eau gagne contre le feu. La plante gagne sur l'eau. C'est pourtant pas si compliqué cervelle de Iop !!";
  btn2.style.display = "none";
  btn.value = "Ah oui !";
  btn.addEventListener("click", dialogueTerrain);
}

function dialogueTerrain() {
  document.getElementById("premPara").innerHTML = "Voici les runes magics qui viens d'apparaître. En bas est ton terrain de jeu, en haut est celui de l'adversaire.";
  btn2.style.display = "none";
  btn.value = "Ça marche";
  document.getElementById("divJoueur").style.display = "grid";
  document.getElementById("container").classList.add("bg");
  btn.addEventListener("click", dialogueName);
}

function dialogueName() {
  document.getElementById("premPara").innerHTML = "Au faite je ne connais même pas ton nom ?";
  btn2.style.display = "none";
  btn.value = "Tiens";
  document.getElementById("pseudo").style.display = "inline-block";
  btn.addEventListener("click", dialogueCombat);
}

function dialogueCombat() {
  document.getElementById("premPara").innerHTML = "Ah ! Très jolie prénom " + pseudo + ". C'est l'heure du Duuuuuuuel !";
  document.getElementById("pseudo").style.display = "none";
  btn2.style.display = "none";
  btn.value = "Go !";
  btn.addEventListener("click", displayDialogue);
}

function displayDialogue() {
  document.getElementById("dialogue").style.display = "none";
  document.getElementById("divAdverse").style.display = "grid";
}


document.getElementById("pointJoueur").innerHTML = scorePlayer;
document.getElementById("pointAdverse").innerHTML = scoreBot;

function myMoveFeu() {
  var pos = 0;
  var id = setInterval(frame, 1);
  var posReturn = 0;

  function frame() {
    if (posReturn === 150) {
      clearInterval(id);
    } else {
      posReturn--;
      feu.style.bottom = posReturn + 'px';
      feu.style.left = posReturn + 'px';
    }
    if (pos === 150) {
      clearInterval(id);
    } else {
      posReturn++;
      pos++;
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
      posReturn--;
      eau.style.bottom = posReturn + 'px';
    }
    if (pos === 150) {
      clearInterval(id);
    } else {
      pos++;
      posReturn++;
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
      posReturn--;
      plante.style.bottom = posReturn + 'px';
      plante.style.right = posReturn + 'px';
    }
    if (pos === 150) {
      clearInterval(id);
    } else {
      pos++;
      posReturn++;
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
        posReturn--;
        feuBot.style.top = posReturn + 'px';
        feuBot.style.left = posReturn + 'px';
      }
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos++;
        posReturn++;
        feuBot.style.top = pos + 'px';
        feuBot.style.left = pos + 'px';
      }
    }
    if (randBot === "Eau") {
      if (posReturn === 150) {
        clearInterval(id);
      } else {
        posReturn--;
        eauBot.style.top = posReturn + 'px';
      }
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos++;
        posReturn++;
        eauBot.style.top = pos + 'px';
      }
    }
    if (randBot === "Plante") {
      if (posReturn === 150) {
        clearInterval(id);
      } else {
        posReturn--;
        planteBot.style.top = posReturn + 'px';
        planteBot.style.right = posReturn + 'px';
      }
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos++;
        posReturn++;
        planteBot.style.top = pos + 'px';
        planteBot.style.right = pos + 'px';
      }
    }
  }
}

function calculJeuFeu() {
  if (randBot === "Feu") {
    document.getElementById("information").innerHTML = "Égalité"
  } else if (randBot === "Eau") {
    document.getElementById("information").innerHTML = "Perdu"
    scoreBot++;
    document.getElementById("pointAdverse").innerHTML = scoreBot;
  } else {
    document.getElementById("information").innerHTML = "Gagné";
    scorePlayer++;
    document.getElementById("pointJoueur").innerHTML = scorePlayer;
  }
}

function calculJeuEau() {
  if (randBot === "Feu") {
    document.getElementById("information").innerHTML = "Gagné";
    scorePlayer++;
    document.getElementById("pointJoueur").innerHTML = scorePlayer;
  } else if (randBot === 'Eau') {
    document.getElementById("information").innerHTML = "Égalité";
  } else {
    document.getElementById("information").innerHTML = "Perdu";
    scoreBot++;
    document.getElementById("pointAdverse").innerHTML = scoreBot;
  }
}

function calculJeuPlante() {
  if (randBot === "Feu") {
    document.getElementById("information").innerHTML = "Perdu";
    scoreBot++;
    document.getElementById("pointAdverse").innerHTML = scoreBot;
  } else if (randBot === "Eau") {
    document.getElementById("information").innerHTML = "Gagné";
    scorePlayer++;
    progress();
    document.getElementById("pointJoueur").innerHTML = scorePlayer;
  } else {
    document.getElementById("information").innerHTML = "Égalité";
  }
}

function endGame() {
  if (scorePlayer === 3) {
    document.getElementById("information").innerHTML = "VICTOIRE !";
    document.getElementById("divJoueur").style.display = "none";
  } else if (scoreBot === 3) {
    document.getElementById("information").innerHTML = "DÉFAITE !";
    document.getElementById("divJoueur").style.display = "none";
  }
}

function progress() {
  var progress = document.getElementById("progressJoueur");
  progress.value = scorePlayer;
}
