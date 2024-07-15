let currentIndex = 1;
const totalParagraphs = 3;

function showNextParagraph() {
  document.getElementById("paragraph" + currentIndex).style.display = "none";
  currentIndex = (currentIndex % totalParagraphs) + 1;
  document.getElementById("paragraph" + currentIndex).style.display = "block";
}

setInterval(showNextParagraph, 1000);
