var feu = document.getElementById("moveFeu");
var eau = document.getElementById("moveEau");
var plante = document.getElementById("movePlante");

var scorePlayer = 0;
var scoreBot = 0;

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
    document.getElementById("pointJoueur").innerHTML = scorePlayer;
  } else {
    document.getElementById("information").innerHTML = "Égalité";
  }
}

function endGame() {
  if (scorePlayer === 3) {
    document.getElementById("information").innerHTML = "VICTOIRE !";
    document.getElementById("divJoueur").style.display = "none";
  }
  else if (scoreBot === 3){
    document.getElementById("information").innerHTML = "DÉFAITE !";
    document.getElementById("divJoueur").style.display = "none";
  }
}
