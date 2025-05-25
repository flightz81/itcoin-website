const quotes = [
  "You'll float too.",
  "We all float down here.",
  "They all float.",
  "Beep beep, Richie!",
  "You'll die with your eyes open.",
  "The terror, the terror!",
  "The clown is scary, but so is the town.",
  "We all float on the sewers.",
  "Time to float, Georgie.",
  "Fear fuels the chaos."
];

const BALLOON_COUNT = 10;
const balloonContainer = document.getElementById('balloon-container');

function createBalloon(id) {
  const balloon = document.createElement('div');
  balloon.className = 'balloon';
  balloon.style.left = Math.random() * (window.innerWidth - 60) + 'px'; // random horizontal position
  balloon.style.animationDuration = 3 + Math.random() * 3 + 's'; // random float speed 3-6s
  balloon.dataset.id = id;

  balloon.addEventListener('click', () => {
    const poppedKey = `balloon_popped_${id}`;
    if (localStorage.getItem(poppedKey) === getTodayDate()) {
      alert("You've already popped this balloon today!");
      return;
    }

    // Mark balloon as popped for today
    localStorage.setItem(poppedKey, getTodayDate());

    // Show random IT quote
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    alert(randomQuote);

    // Hide the balloon visually after popping
    balloon.style.visibility = 'hidden';
  });

  return balloon;
}

function getTodayDate() {
  const now = new Date();
  return now.toISOString().slice(0, 10); // yyyy-mm-dd
}

function initBalloons() {
  for (let i = 0; i < BALLOON_COUNT; i++) {
    const balloon = createBalloon(i);
    balloonContainer.appendChild(balloon);
  }
}

initBalloons();
