/* 🔹 Page 1 JS (index.html) */
document.addEventListener("DOMContentLoaded", () => {
  if (document.title.includes("Destinations")) {
    console.log("Page 1 (Destinations) loaded!");
  }
});
js /* 🔹 Page 2 JS (destination.html) */
document.addEventListener("DOMContentLoaded", () => {
  if (document.title.includes("Destination Details")) {
    console.log("Page 2 (Details) loaded!");
  }
});

console.log("Travel Blog script loaded!");