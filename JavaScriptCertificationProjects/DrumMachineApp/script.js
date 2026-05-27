const display = document.getElementById("display");

const drumPads = [
  { key: "Q", sound: "Heater-1" },
  { key: "W", sound: "Heater-2" },
  { key: "E", sound: "Heater-3" },
  { key: "A", sound: "Heater-4" },
  { key: "S", sound: "Clap" },
  { key: "D", sound: "Open-HH" },
  { key: "Z", sound: "Kick-n-Hat" },
  { key: "X", sound: "Kick" },
  { key: "C", sound: "Closed-HH" }
];

function playSound(key) {
  const audio = document.getElementById(key);

  if (!audio) return;

  audio.currentTime = 0;
  audio.play();

  const button = audio.parentElement;

  display.innerText = button.id;

  button.classList.add("active");

  setTimeout(() => {
    button.classList.remove("active");
  }, 100);
}

document.querySelectorAll(".drum-pad").forEach((pad) => {
  pad.addEventListener("click", () => {
    playSound(pad.innerText.trim());
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toUpperCase();

  const validKeys = drumPads.map((pad) => pad.key);

  if (validKeys.includes(key)) {
    playSound(key);
  }
});
