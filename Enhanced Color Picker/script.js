function generate() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    document.getElementsByClassName('num')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementsByClassName('spa')[0].style.color = `rgb(${r}, ${g}, ${b})`;

    document.getElementById('sliderValue3').innerHTML=b;
    document.getElementById('b').value=b;

    document.getElementById('sliderValue2').innerHTML=g;
    document.getElementById('g').value=g;

    document.getElementById('sliderValue1').innerHTML=r;
    document.getElementById('r').value=r;
    
    var hexCode = rgbToHex(r, g, b);
    console.log(hexCode);
    document.getElementById('rgbValue').innerHTML = `${hexCode}`;
}

function updateValue() {
    var r = parseInt(document.getElementById('r').value);
    var g = parseInt(document.getElementById('g').value);
    var b = parseInt(document.getElementById('b').value);
    
    document.getElementsByClassName('num')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementsByClassName('spa')[0].style.color = `rgb(${r}, ${g}, ${b})`;

    document.getElementById('sliderValue3').innerHTML=b;
    document.getElementById('sliderValue2').innerHTML=g;
    document.getElementById('sliderValue1').innerHTML=r;
    
    var hexCode = rgbToHex(r, g, b);
    console.log(hexCode);
    document.getElementById('rgbValue').innerHTML = `${hexCode}`;
}

function rgbToHex(r, g, b) {
    return "#" + toHex(r) + toHex(g) + toHex(b);
}

function toHex(value) {
    var hex = value.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
function copyIt() {
    navigator.clipboard.writeText(document.getElementById('rgbValue').innerHTML);
}
