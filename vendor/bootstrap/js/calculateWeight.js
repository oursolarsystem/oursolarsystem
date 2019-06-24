var multiplucativeNumber = -1.00;
var enteredWeight = 0;
var planetName = "";

function calculateWeightMercury() {
    multiplucativeNumber = 0.38;
    planetName = "Меркурий";
}

function calculateWeightVenus() {
    multiplucativeNumber = 0.91;
    planetName = "Венера";
}

function calculateWeightEarth() {
    multiplucativeNumber = 1.00;
    planetName = "Земя";
}

function calculateWeightMars() {
    multiplucativeNumber = 0.38;
    planetName = "Марс";
}

function calculateWeightJupiter() {
    multiplucativeNumber = 2.34;
    planetName = "Юпитер";
}

function calculateWeightSaturn() {
    multiplucativeNumber = 1.06;
    planetName = "Сатурн";
}

function calculateWeightUranus() {
    multiplucativeNumber = 0.92;
    planetName = "Уран";
}

function calculateWeightNeptune() {
    multiplucativeNumber = 1.19;
    planetName = "Нептун";
}

function calculateWeightPluto() {
    multiplucativeNumber = 0.06;
    planetName = "Плутон";
}


function calculateWeight() {
    enteredWeight = document.getElementById("weight_number").value;
    if (multiplucativeNumber === -1.00) {
        let text = "Изберeте планета преди да<br>изчислите теглото си!";
        let element = document.getElementById("write_here");
        element.style.color = "violet";
        element.innerHTML = text;
    } else if(enteredWeight <= 0) {
        let text = "Въведете коректно тегло!";
        let element = document.getElementById("write_here");
        element.style.color = "violet";
        element.innerHTML = text;
    } else {
        let weight = enteredWeight * multiplucativeNumber;
        let element = document.getElementById("write_here");
        let text = "<p>Твоето тегло на " + planetName + " ще бъде:</p><p>" + weight + " kg!</p>";
        element.style.color = "violet";
        element.innerHTML = text;
    }
}

function restore() {
    multiplucativeNumber = -1.00;
    planetName = "";
    enteredWeight = 0;

    document.getElementById("write_here").innerHTML = "";
    document.getElementById("weight_number").value = "none";
}

document.getElementById("btn1").addEventListener('click', calculateWeightMercury);
document.getElementById("btn2").addEventListener('click', calculateWeightVenus);
document.getElementById("btn3").addEventListener('click', calculateWeightEarth);
document.getElementById("btn4").addEventListener('click', calculateWeightMars);
document.getElementById("btn5").addEventListener('click', calculateWeightJupiter);
document.getElementById("btn6").addEventListener('click', calculateWeightSaturn);
document.getElementById("btn7").addEventListener('click', calculateWeightUranus);
document.getElementById("btn8").addEventListener('click', calculateWeightNeptune);
document.getElementById("btn9").addEventListener('click', calculateWeightPluto);

document.getElementById("check_button").addEventListener('click', calculateWeight);
document.getElementById("restore_button").addEventListener('click', restore);