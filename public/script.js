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

// Alphabet filter function
const filtroAlpha = function (letter) {
  // remove selected characters from alphabet
  var beto = alpha.filter((el) => el != letter);
  alpha = [...beto];
  alphaList.innerHTML = "";
  // print alphabet letters
  alpha.forEach((element) => {
    alphaList.innerHTML += "<li>" + element + "</li>";
  });
};

// WIN-LOSE FUNCTION
// ALPHABET FILTER
const winLose = function () {
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
};

// PRINT
// print alphabet
alpha.forEach((element) => {
  alphaList.innerHTML += "<li>" + element + "</li>";
});

// getting a casual word from myWords and creating an array with the word splitted
var randomIndex = Math.floor(Math.random() * myWords.length);
var randomElement = myWords[randomIndex].split("");

// creating an empty array for printing empty spaces based on word length
let letters = [];
randomElement.forEach((element) => {
  letters.push("");
});

letters.forEach((element) => {
  wordToGuess.innerHTML += "<li>" + element + "</li>";
});

error.innerHTML = errors;

// CHECK FUNCTION
function check() {
  // capitalize letter
  let letter = pressEnter.value.toUpperCase();

  if (!alpha.includes(letter)) {
    return alert("La lettera selezionata non è disponibile!");
  }

  if (randomElement.includes(letter)) {
    // WORD FILTER
    // fill out the empty array with the letter in the specific index
    randomElement.forEach((element, index) => {
      if (element === letter) {
        letters[index] = element;
      }
    });
    wordToGuess.innerHTML = "";
    // print letters
    letters.forEach((element) => {
      wordToGuess.innerHTML += "<li>" + element + "</li>";
    });
    // ALPHABET FILTER
    filtroAlpha(letter);
    pressEnter.value = "";
    // win-lose
    winLose();
  } else if (pressEnter.value.length > 1) {
    // no 1 letter = error
    alert("Valore inserito sbagliato");
    pressEnter.value = "";
  } else if (pressEnter.value == "") {
    // no letter = error
    alert("Valore nullo, inserisci un valore");
    pressEnter.value = "";
  } else {
    // ALPHABET FILTER
    filtroAlpha(letter);
    pressEnter.value = "";
    error.innerHTML = errors -= 1;
    // win-lose
    winLose();
  }

  // DISEGNO
  document.getElementById(`e-${errors}`).classList.remove("hide");
  // document.getElementById(`e-${errors}`).classList.add("show");
}
