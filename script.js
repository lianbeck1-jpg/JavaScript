console.log("Welcome to GameZone!");

const gameName = "GameZone";
let welcomeText = "Ready to play?";

console.log(gameName);
console.log(welcomeText);

// Practice using a template literal
let samplePlayer = "Alex";
console.log(`Welcome ${samplePlayer} to ${gameName}!`);

// Uncomment this line temporarily if you want to test an alert.
alert("Your gaming adventure is about to begin!");

// Find the HTML elements
const nameInput = document.getElementById("gamerName");
const startButton = document.getElementById("startBtn");
const message = document.getElementById("welcomeMessage");

// Respond when the Start Game button is clicked
startButton.addEventListener("click", function () {
  const playerName = nameInput.value.trim();

  // Check whether the visitor entered a name
  if (playerName === "") {
    message.textContent = "Please enter your gamer name!";
    return;
  }

  // Create and display a personalized greeting
  const greeting =
    `Welcome, ${playerName}! Your gaming adventure starts now! 🎮`;

  message.textContent = greeting;
});
