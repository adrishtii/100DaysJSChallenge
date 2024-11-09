function generate() {
    var n1 = parseInt(document.getElementById("start").value);
    var n2 = parseInt(document.getElementById("end").value);

    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("start").value=0;
        document.getElementById("end").value=0;
        document.getElementById("num").textContent = 0;
    }
    else{
        var min = Math.min(n1, n2);
        var max = Math.max(n1, n2);
        document.getElementById("start").value=min;
        document.getElementById("end").value=max;
        
        var randomNum=Math.floor(Math.random()*(max-min+1))+min;
        document.getElementById("num").textContent=randomNum;
    }
}
