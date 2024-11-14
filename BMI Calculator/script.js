function generate() {
    var weight = parseFloat(document.getElementById("start").value);
    var height = parseFloat(document.getElementById("end").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        document.getElementById("start").value = 54;
        document.getElementById("end").value = 1.54;
        document.getElementById("nummm").textContent = "Invalid Values";
        document.getElementById("numm").textContent = "Weight in KG, Height in m";
        document.getElementById("num").style.borderColor = "blueviolet";
        return;
    }

    var bmi = (weight / (height * height)).toFixed(2);
    document.getElementById("nummm").textContent = "BMI: " + bmi;

    if (bmi < 18.5) {
        document.getElementById("num").style.borderColor = "pink";
    } else if (bmi < 25) {
        document.getElementById("num").style.borderColor = "green";
    } else if (bmi < 35) {
        document.getElementById("num").style.borderColor = "orange";
    } else if (bmi < 40) {
        document.getElementById("num").style.borderColor = "red";
    } else {
        document.getElementById("num").style.borderColor = "darkred";
    }

    var minWeight = (18.5 * height * height).toFixed(2);
    var maxWeight = (24.9 * height * height).toFixed(2);
    document.getElementById("numm").textContent = "Healthy Weight Range: " + minWeight + " - " + maxWeight;
}
