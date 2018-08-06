function myMoveFeu() {
  var feu = document.getElementById("moveFeu");
  var pos = 0;
  var id = setInterval(frame, 7);

  function frame() {
    if (pos === 150) {
      clearInterval(id);
    } else {
      pos++;
      feu.style.bottom = pos + 'px';
      feu.style.left = pos + 'px';
    }

  }
  choiceBot();
}

function myMoveEau() {
  var eau = document.getElementById("moveEau");
  var pos = 0;
  var id = setInterval(frame, 7);

  function frame() {
    if (pos === 150) {
      clearInterval(id);
    } else {
      pos++;
      eau.style.bottom = pos + 'px';
    }
  }
  choiceBot();
}

function myMovePlante() {
  var plante = document.getElementById("movePlante");
  var pos = 0;
  var id = setInterval(frame, 7);

  function frame() {
    if (pos === 150) {
      clearInterval(id);
    } else {
      pos++;
      plante.style.bottom = pos + 'px';
      plante.style.right = pos + 'px';
    }
  }
  choiceBot();
}


function choiceBot() {
  var elemBot = ["Feu", "Eau", "Plante"];
  var randBot = elemBot[Math.floor(Math.random() * elemBot.length)];

  var feuBot = document.getElementById("feuBot");
  var eauBot = document.getElementById("eauBot");
  var planteBot = document.getElementById("planteBot");

  var pos = 0;
  var id = setInterval(frame, 7);
  console.log(randBot);

  function frame() {
    if (randBot === "Feu") {
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos++;
        feuBot.style.top = pos + 'px';
      }
    }
    if (randBot === "Eau") {
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos++;
        eauBot.style.top = pos + 'px';
      }
    }
    if (randBot === "Plante") {
      if (pos === 150) {
        clearInterval(id);
      } else {
        pos++;
        planteBot.style.top = pos + 'px';
      }
    }
  }
}
