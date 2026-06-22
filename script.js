function applyTheme(isDark) {
  document.documentElement.classList.toggle("dark", isDark);
}

function toggleTheme() {
  applyTheme(!document.documentElement.classList.contains("dark"));
}

const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

applyTheme(darkQuery.matches);
darkQuery.addEventListener("change", (event) => applyTheme(event.matches));
