const pressEnter = document.getElementById("input");
const wordToGuess = document.getElementById("word");
const alphaList = document.getElementById("list");
const error = document.getElementById("error");
const wl = document.querySelector(".winlose");
wl.classList.add("hide");

const myWords = [
  "BANANA",
  "HAMBURGHER",
  "MELA",
  "ARANCIA",
  "PESCA",
  "LASAGNA",
  "PIZZA",
  "PIADINA",
  "BRIOCHES",
  "CHEESECAKE",
  "CARBONARA",
  "SALMONE",
];

let alpha = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "Z",
];

let errors = 11;

// FUNZIONE FILTRO ALFABETO
const filtroAlpha = function (letter) {
  // rimuovo la lettera selezionata dall'alfabeto
  var beto = alpha.filter((el) => el != letter);
  alpha = [...beto];
  alphaList.innerHTML = "";
  // stampo le lettere dell'alfabeto disponibili
  alpha.forEach((element) => {
    alphaList.innerHTML += "<li>" + element + "</li>";
  });
};

// STAMPO A SCHERMO
// stampo alfabeto a schermo
alpha.forEach((element) => {
  alphaList.innerHTML += "<li>" + element + "</li>";
});

// prendo una parola casuale da myWords e creo un array contenente ogni singola lettera della parola
var randomIndex = Math.floor(Math.random() * myWords.length);
var randomElement = myWords[randomIndex].split("");

// creo un array vuoto per stampare esattamente gli spazi vuoti in base alla lunghezza della parola
let letters = [];
randomElement.forEach((element) => {
  letters.push("");
});

letters.forEach((element) => {
  wordToGuess.innerHTML += "<li>" + element + "</li>";
});

error.innerHTML = errors;

// FUNZIONE CHE VIENE ESEGUITA UNA VOLTA INSERITA UNA LETTERA
function check() {
  console.log("aggiungo");
  // capitalizzo la lettera
  let letter = pressEnter.value.toUpperCase();

  if (randomElement.includes(letter)) {
    // FILTRO PAROLA
    // inserisco la lettera nello specifico index
    randomElement.forEach((element, index) => {
      if (element === letter) {
        letters[index] = element;
      }
    });
    wordToGuess.innerHTML = "";
    // stampo la/e lettere a schermo
    letters.forEach((element) => {
      wordToGuess.innerHTML += "<li>" + element + "</li>";
    });
    // FILTRO ALFABETO
    filtroAlpha(letter);
    pressEnter.value = "";
    // lose
    if (errors == 0) {
      wl.innerHTML = "You lose! 😢😢";
      wl.classList.remove("hide");
    }
    // winner
    if (randomElement.join("") === letters.join("")) {
      wl.innerHTML = "Congratulations! You win! 🎉🎉";
      wl.classList.remove("hide");
    }
  } else if (pressEnter.value.length > 1) {
    // se non viene inserita una lettera ricevo l'errore
    alert("Valore inserito sbagliato");
    pressEnter.value = "";
  } else if (pressEnter.value == "") {
    // se non viene inserito nulla
    alert("Valore nullo, inserisci un valore");
    pressEnter.value = "";
  } else {
    // FILTRO ALFABETO
    filtroAlpha(letter);
    pressEnter.value = "";
    error.innerHTML = errors -= 1;
    // lose
    if (errors == 0) {
      wl.innerHTML = "You lose! 😢😢";
      wl.classList.remove("hide");
    }
    // winner
    if (randomElement.join("") === letters.join("")) {
      wl.innerHTML = "Congratulations! You win! 🎉🎉";
      wl.classList.remove("hide");
    }
  }

  // DISEGNO
  document.getElementById(`e-${errors}`).classList.remove("hide");
  // document.getElementById(`e-${errors}`).classList.add("show");
}
