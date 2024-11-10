function generate() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    
    document.getElementsByClassName('num')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    document.getElementsByClassName('spa')[0].style.color = `rgb(${r}, ${g}, ${b})`;
    
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
