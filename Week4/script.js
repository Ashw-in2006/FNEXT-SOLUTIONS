let count = 0;
const countDisplay = document.getElementById("count");
const messageDisplay = document.getElementById("message");

const messages = [
  "Feel that burn 🔥",
  "One more rep! 🏃‍♂️",
  "Stay strong 💪",
  "You got this! 🚀",
  "Break limits, build gains ⚡",
  "Grind now, shine later 🌟",
  "Stronger every step! 🏋️",
  "Discipline > Motivation 💯",
  "Rep by rep, win the day 🎯",
  "Beast mode activated 🐾"
];

const negativeMessages = [
  "It's okay to slow down. Breathe 🧘",
  "Control the fall, own the rise ⬇️⬆️",
  "Even athletes take a step back 🏁",
  "Reset to rise again 🔁",
  "Pace yourself, champion 🕊️"
];

function changeCount(amount) {
  count += amount;
  countDisplay.textContent = count;
  const quote = amount > 0
    ? messages[Math.floor(Math.random() * messages.length)]
    : negativeMessages[Math.floor(Math.random() * negativeMessages.length)];
  messageDisplay.textContent = quote;
}

function resetCount() {
  count = 0;
  countDisplay.textContent = count;
  messageDisplay.textContent = "Reset complete. Ready to dominate again! 🔄";
}
