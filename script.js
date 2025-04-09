var cpt = 0;
var time = 300;
var timer = 60;
var generatorInterval1;
var generatorInterval2;

function generator() {
  // Stockez l'identifiant d'intervalle pour pouvoir l'arrêter plus tard
  generatorInterval1 = setInterval(() => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.top = Math.random() * 100 + 50 + "%";
    bubble.style.left = Math.random() * 100 + "%";

    const compteur = document.querySelector("#compteur");

    bubble.addEventListener("click", () => {
      cpt += 1;
      compteur.textContent = cpt;
      bubble.remove() = "hidden";

      // Corriger la logique conditionnelle
      if (cpt > 5) {
        // Arrêter et redémarrer le générateur avec un nouveau temps
        clearInterval(generatorInterval1);
        time = 20;
        generatorInterval1 = setInterval(generatorFunction, time);
      } else if (cpt > 3) {
        // Arrêter et redémarrer le générateur avec un nouveau temps
        clearInterval(generatorInterval1);
        time = 100;
        generatorInterval1 = setInterval(generatorFunction, time);
      }
    });
  }, time);
}

function generator2() {
  const compte = document.querySelector("#compte");
  const time5 = document.querySelector("#time");
  compte.classList.add("style");
  time5.classList.add("style");

  // Stockez l'identifiant d'intervalle pour pouvoir l'arrêter plus tard
  generatorInterval2 = setInterval(() => {
    const bubble = document.createElement("span");
    bubble.classList.add("bubble");
    document.body.appendChild(bubble);
    const size = Math.random() * 200 + 100 + "px";
    bubble.style.height = size;
    bubble.style.width = size;
    bubble.style.bottom = Math.random() * 100 + 50 + "%";
    bubble.style.right = Math.random() * 100 + "%";

    const compteur = document.querySelector("#compteur");

    bubble.addEventListener("click", () => {
      cpt += 1;
      compteur.textContent = cpt;
      bubble.remove();
    });
  }, time);

  const rebours = document.getElementById("rebours");

  const intervalId = setInterval(() => {
    timer--;
    rebours.textContent = timer;

    // Vérifiez si le timer atteint zéro
    if (timer <= 0) {
      // Arrêter tous les intervalles
      clearInterval(intervalId);
      clearInterval(generatorInterval1);
      clearInterval(generatorInterval2);
      timer = 0;
      cpt = 0;
      rebours.textContent = timer;
      compteur.textContent = cpt;

      // Afficher un message de fin de jeu
      alert("Temps écoulé ! Votre score final est : " + cpt);
      let answer = confirm("Refaire ?");
      if (answer === true) {
        timer = 60;
        generator();
        generator2();
      }
    }
  }, 1000);
}

generator();
generator2();
