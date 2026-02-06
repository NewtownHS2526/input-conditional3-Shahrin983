// ============================================
// ACTIVITY 3: THE SOLAR SYSTEM QUIZ
// ============================================
// In this activity, you will create a quiz where users guess the 8 planets.
// Follow the TODO comments to complete each section.
// Hint: Remember "My Very Eager Mother Just Served Us Nachos"
// (Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune)
// ============================================

// --------------------------------------------
// STEP 1: SELECT DOM ELEMENTS
// --------------------------------------------
// We use document.querySelector() to "grab" HTML elements so we can 
// interact with them in JavaScript.
// 
// querySelector() takes a CSS selector as an argument:
//   - "#id-name" selects an element by its ID
//   - ".class-name" selects an element by its class
//
// TODO: Select the following three elements from the HTML:
//   1. The text input box (id="user-input")
//   2. The output div where correct answers appear (id="quiz-outputs")
//   3. The status message area (id="status")
// --------------------------------------------


const textBox = document.querySelector("#user-input");
const outputBox = document.querySelector("#quiz-outputs");
const statusBox = document.querySelector("#status");

console.log(textBox, outputBox, statusBox);

let score = 0;
let Pluto = false;

const checkAnswer = () => {
  const currentAnswer = textBox.value;
  console.log("Checking", currentAnswer);
  // Match against Planets.
  if (currentAnswer === "Mercury") {
    outputBox.innerHTML += `<h3>Mercury</h3><p>The smallest planet in the Solar System!</p>`;
    score += 1;
  } else if (currentAnswer === "Venus") {
    outputBox.innerHTML += `<h3>Venus</h3><p>It is the only planet in our solar system that rotates clockwise!</p>`;
    score += 1;
  } else if (currentAnswer === "Earth" ) {
    outputBox.innerHTML += `<h3>Earth</h3><p>Our Home planet!</p>`;
    score += 1;
  } else if (currentAnswer === "Mars") {
    outputBox.innerHTML += `<h3>Mars</h3><p>Also known as the red planet!</p>`;
    score += 1;
  } else if (currentAnswer === "Jupiter") {
    outputBox.innerHTML += `<h3>Jupiter</h3><p>The Biggest planet in the Solar System!</p>`;
    score += 1;
  } else if (currentAnswer === "Saturn") {
    outputBox.innerHTML += `<h3>Saturn</h3><p>Saturn is famous for its rings which are made of ice/rock.</p>`;
    score += 1; 
  } else if (currentAnswer === "Uranus") {
    outputBox.innerHTML += `<h3>Uranus</h3><p>The coldest planet in the Solar System!</p>`;
    score += 1; 
  } else if (currentAnswer === "Neptune") {
    outputBox.innerHTML += `<h3>Neptune</h3><p>Neptune is the windy, blue ice giant with supersonic winds.</p>`;
    score += 1; 
    } else if (currentAnswer === "Pluto") {
    outputBox.innerHTML += `<h3>Pluto</h3><p>You found the 9th Planet!</p>`;
    Pluto =  true;
    } else {
    statusBox.innerHTML = `Sorry, but ${currentAnswer} is not a Planet.`;
  }
  checkScore();
  // Reset the textBox
  textBox.value = "";
};

const checkScore = () => {
  if (score === 8) {
    statusBox.innerHTML = "Congratulations, you found all eight planets!";
  }
  if (score === 8 && Pluto) {
    statusBox.innerHTML =
      " A true Space Student! All eight Planets and the dwarf planet Pluto!.";
    textBox.disabled = true;
  }
};

textBox.addEventListener("change", checkAnswer);









