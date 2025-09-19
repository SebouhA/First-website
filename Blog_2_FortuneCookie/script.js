const fortunes = [
  "#1: You will achieve greatness... right after this nap.",
  "#2: Your WiFi password will finally work on the first try.",
  "#3: A mysterious smell will haunt you today. It’s probably you.",
  "#4: Don’t worry, nobody noticed that embarrassing thing you did. Probably.",
  "#5: A wild craving for snacks will control your evening.",
  "#6: You will argue with technology... and lose.",
  "#7: An unexpected bill is coming. Congrats, you’re an adult now.",
  "#8: Someone will compliment you today… in their head.",
  "#9: Your phone battery will betray you at the worst possible time.",
  "#10: You will win an argument in the shower three hours too late.",
  "#11: The universe says relax. Your boss disagrees.",
  "#12: Luck is coming your way… but it’s stuck in traffic.",
  "#13: You will eat something you regret, but it will be worth it.",
  "#14: A text you’ve been waiting for will arrive. It’ll be spam.",
  "#15: Today you are the drama.",
  "#16: You will discover money you forgot about… in Monopoly.",
  "#17: Someone will think of you fondly. Then forget immediately.",
  "#18: Greatness is within reach, but so is pizza.",
  "#19: Your future self is laughing at you right now.",
  "#20: The stars say you’re special. The WiFi router disagrees."
];

// Function to get a random fortune
function getRandomFortune() {
  const randomIndex = Math.floor(Math.random() * fortunes.length);
  return fortunes[randomIndex];
}

// Show the fortune on the page
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fortune").textContent = getRandomFortune();
});



/*const fortunes = [
  "#1: You will find joy in unexpected places.",
  "#2: An old friend will bring new opportunities.",
  "#3: Patience today will reward you tomorrow.",
  "#4: Adventure awaits just around the corner.",
  "#5: A kind word will change your day."
];

function getTodaysFortune() {
  const today = new Date().toISOString().split("T")[0]; // YYYY-MM-DD
  const storedDate = localStorage.getItem("fortuneDate");
  const storedFortune = localStorage.getItem("fortuneText");

  if (storedDate === today && storedFortune) {
    return storedFortune; // show same fortune
  }

  // pick new fortune
  const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
  localStorage.setItem("fortuneDate", today);
  localStorage.setItem("fortuneText", fortune);
  return fortune;
}

// Run after page loads
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("fortune").textContent = getTodaysFortune();
}); */
