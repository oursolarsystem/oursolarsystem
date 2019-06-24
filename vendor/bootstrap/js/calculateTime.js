var multiplucativeNumber = -1.00;
var enteredTime = 0;
var planetName = "";

function calculateTimeMercury() {
    multiplucativeNumber = 59.00;
    planetName = "Меркурий";
}

function calculateTimeVenus() {
    multiplucativeNumber = 243.00;
    planetName = "Венера";
}

function calculateTimeEarth() {
    multiplucativeNumber = 1.00;
    planetName = "Земя";
}

function calculateTimeMars() {
    multiplucativeNumber = 1.04;
    planetName = "Марс";
}

function calculateTimeJupiter() {
    multiplucativeNumber = 0.24;
    planetName = "Юпитер";
}

function calculateTimeSaturn() {
    multiplucativeNumber = 0.46;
    planetName = "Сатурн";
}

function calculateTimeUranus() {
    multiplucativeNumber = 0.71;
    planetName = "Уран";
}

function calculateTimeNeptune() {
    multiplucativeNumber = 0.67;
    planetName = "Нептун";
}

function calculateTimePluto() {
    multiplucativeNumber = 6.375;
    planetName = "Плутон";
}


function calculateTime() {
    enteredTime = document.getElementById("time_number").value;
    if (multiplucativeNumber === -1.00) {
        let text = "Изберeте планета преди да<br>изчислите времето на<br>друга планета!";
        let element = document.getElementById("write_here");
        element.style.color = "violet";
        element.innerHTML = text;
    } else if(enteredTime <= 0) {
        let text = "Въведете коректно време!";
        let element = document.getElementById("write_here");
        element.style.color = "violet";
        element.innerHTML = text;
    } else {
        let time = enteredTime * multiplucativeNumber;
        let element = document.getElementById("write_here");
        let text = "<p>Времето на " + planetName + " ще бъде:</p><p>" + time + " минути!</p>";
        element.style.color = "violet";
        console.log(text);
        element.innerHTML = text;
    }
}

function restore() {
    multiplucativeNumber = -1.00;
    planetName = "";
    enteredTime = 0;

    document.getElementById("write_here").innerHTML = "";
    document.getElementById("time_number").value = "none";
}

document.getElementById("btn1").addEventListener('click', calculateTimeMercury);
document.getElementById("btn2").addEventListener('click', calculateTimeVenus);
document.getElementById("btn3").addEventListener('click', calculateTimeEarth);
document.getElementById("btn4").addEventListener('click', calculateTimeMars);
document.getElementById("btn5").addEventListener('click', calculateTimeJupiter);
document.getElementById("btn6").addEventListener('click', calculateTimeSaturn);
document.getElementById("btn7").addEventListener('click', calculateTimeUranus);
document.getElementById("btn8").addEventListener('click', calculateTimeNeptune);
document.getElementById("btn9").addEventListener('click', calculateTimePluto);

document.getElementById("check_button").addEventListener('click', calculateTime);
document.getElementById("restore_button").addEventListener('click', restore);