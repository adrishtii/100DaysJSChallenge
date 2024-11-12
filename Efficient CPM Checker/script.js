var charString = '7abc';
var st = 0;
var words = 0;
var startTime;

function start() {
  if (st == 1) {
    st = 0;
    var endTime = Date.now();
    var elapsedTime = (endTime - startTime) / 1000;
    var charString = '7abc';
    document.getElementById("nummm").textContent = ((words * 60) / elapsedTime).toFixed(2) + " cpm";
    document.getElementById("numm").textContent = "";
    document.getElementById("butt").innerHTML = 'START';
  } else {
    st = 1;
    words = 0;
    startTime = Date.now();
    document.getElementById("butt").innerHTML = 'END';
    doit();
  }
}

function doit() {
  const chars = 'abcdefghijklmnopqrstuvwxyz';
  const randomIndex = Math.floor(Math.random() * chars.length);
  const newChar = chars[randomIndex];
  charString = charString.slice(1) + newChar;
  document.getElementById("nummm").textContent = charString.charAt(0);
  document.getElementById("numm").textContent = charString.slice(1);
}

function handleKeyPress(event) {
  const pressedChar = event.key;
  const currentChar = charString.charAt(0);

  if (pressedChar == currentChar) {
    words++;
    doit();
  }
}

window.addEventListener('keydown', handleKeyPress);
