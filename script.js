const word = document.querySelector("word");
const text = document.querySelector("text");
const scoreEl = document.querySelector("score");
const timeEl = document.querySelector("time");
const endgameEl = document.querySelector("end-game");
const settingBtn = document.querySelector("settings-btn");
const settings = document.querySelector("settings");
const settingsForm = document.querySelector("settings-form");
const difficultySelect = document.querySelector("difficulty");

const words = [
  "feeble",
  "admit",
  "apple",
  "computer",
  "tissue",
  "book",
  "comprehnesive",
  "education",
  "knowledge",
  "man",
  "afghanistan",
  "technology",
  "mouse",
  "screen",
  "lamp",
  "mobile",
  "javascript",
  "card",
];

//init randomWord
let randomWord;
//init score
let score = 0;
//init time
let time = 0;

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}
console.log(words.length);
console.log(getRandomWord());
