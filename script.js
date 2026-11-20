console.log("Welcome to GameZone!");
const gameName = "GameZone";

let welcomeText = "Ready to play?";
console.log(gameName);

console.log(welcomeText);
let samplePlayer = "Bob";
console.log(
  `Welcome ${samplePlayer} to ${gameName}!`
);
alert("Your game is about to begin!");
// alert("Your game is about to begin!");
const nameInput = document.getElementById("gamerName");

const startButton = document.getElementById("startBtn");

const message = document.getElementById("welcomeMessage");
startButton.addEventListener("click", function() {
let playerName = nameInput.value.trim();
let greeting =
  `Welcome, ${playerName}! Your gaming adventure starts now! 🎮`;
message.textContent = greeting;
if (playerName === "") {
  message.textContent = "Please enter your gamer name!";
  return;
}

});

