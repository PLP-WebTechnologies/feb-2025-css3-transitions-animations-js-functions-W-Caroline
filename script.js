// DOM elements
const box = document.getElementById("box");
const animateBtn = document.getElementById("animateBtn");
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
const saveColorBtn = document.getElementById("saveColorBtn");
const greeting = document.getElementById("greeting");
const nameInput = document.getElementById("nameInput");
const saveNameBtn = document.getElementById("saveNameBtn");

// Animate box
animateBtn.addEventListener("click", () => {
  box.classList.add("bounce");
  box.addEventListener(
    "animationend",
    () => {
      box.classList.remove("bounce");
    },
    { once: true }
  );
});

// Save box color
saveColorBtn.addEventListener("click", () => {
  const color = prompt("Enter a color (name or hex):");
  if (color) {
    box.style.backgroundColor = color;
    localStorage.setItem("boxColor", color);
  }
});

// Toggle theme
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  const theme = document.body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});

// Save user name
saveNameBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  if (name) {
    localStorage.setItem("username", name);
    greeting.textContent = `👋 Welcome, ${name}!`;
    nameInput.value = "";
  }
});

// Load saved settings on page load
window.addEventListener("DOMContentLoaded", () => {
  const savedColor = localStorage.getItem("boxColor");
  const savedTheme = localStorage.getItem("theme");
  const savedName = localStorage.getItem("username");

  if (savedColor) box.style.backgroundColor = savedColor;
  if (savedTheme === "dark") document.body.classList.add("dark");
  if (savedName) greeting.textContent = `👋 Welcome back, ${savedName}!`;
});
