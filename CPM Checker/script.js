var randomChar = '7';
var st = 0;
var words = 0;
var startTime;

function start() {
  if (st == 1) {
    st = 0;
    var endTime = Date.now();
    var elapsedTime = (endTime - startTime) / 1000;
    document.getElementById("num").textContent = ((words * 60) / elapsedTime).toFixed(2) + " cpm";
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
  document.getElementById("num").textContent = chars[randomIndex];
  randomChar = chars[randomIndex];
  return chars[randomIndex];
}

function handleKeyPress(event) {
  const pressedChar = event.key;

  if (pressedChar == randomChar) {
    console.log('Correct! You pressed the correct character:', pressedChar);
    randomChar = doit();
    console.log('New character to type:', randomChar);
    words++;
  } else {
    console.log('Incorrect! You pressed:', pressedChar);
  }
}

window.addEventListener('keydown', handleKeyPress);
