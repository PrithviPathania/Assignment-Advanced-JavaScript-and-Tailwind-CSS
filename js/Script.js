// Krish Choudhary

function convertWeight() {

    let kg = parseFloat(document.getElementById("kg").value);

    if (isNaN(kg)) {
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }

    let pounds = kg * 2.20462;

    document.getElementById("result").innerText =
        kg + " Kilograms = " + pounds.toFixed(2) + " Pounds";
}


function convertDistance() {

    let km = parseFloat(document.getElementById("km").value);

    if (isNaN(km)) {
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }

    let miles = km * 0.621371;

    document.getElementById("result").innerText =
        km + " Kilometers = " + miles.toFixed(2) + " Miles";
}


function convertTemperature() {

    let celsius = parseFloat(document.getElementById("celsius").value);

    if (isNaN(celsius)) {
        document.getElementById("result").innerText = "Please enter a valid number";
        return;
    }

    let fahrenheit = (celsius * 9/5) + 32;

    document.getElementById("result").innerText =
        celsius + "°C = " + fahrenheit.toFixed(2) + "°F";
}