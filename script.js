const text = "Technical Writer · API Documentation · Product Docs";
const speed = 70;
let i = 0;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = typeWriter;
