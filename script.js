document.addEventListener("DOMContentLoaded", function() {
  document.querySelector(".jumbotron").classList.add("loaded");

  // Typing text effect
  const typingText = document.querySelector(".typing-text");
  const textToType = "Andi Irzan";
  let charIndex = 0;

  function typeChar() {
    if (charIndex < textToType.length) {
      typingText.textContent += textToType[charIndex];
      charIndex++;
      setTimeout(typeChar, 100); // adjust the speed of typing
    }
  }

  typeChar();
});

document.querySelector(".btn").addEventListener("click", function() {
  document.querySelector(".jumbotron").classList.add("clicked");
});