
var enteredInputs = {
    "input_jupiter": -1, "input_mars": -1, "input_earth": -1, "input_venus": -1,
    "input_saturn": -1, "input_neptune": -1, "input_mercury": -1, "input_uranus": -1
};

var rightInputs = {
    "input_jupiter": 5, "input_mars": 4, "input_earth": 3, "input_venus": 2,
    "input_saturn": 6, "input_neptune": 8, "input_mercury": 1, "input_uranus": 7
};

function checkOrder() {
    getInputs();
    if (!checkValues()) {
        let elemenet = document.getElementById("write_here");
        elemenet.style.color = "violet";
        elemenet.innerHTML = "Въведете коректни данни!";
    } else if (isRightOrder()) {
        let elemenet = document.getElementById("write_here");
        elemenet.style.color = "blueviolet";
        elemenet.innerHTML = "Поздравления! Успешно подредихте планетите!";
    } else {
        let elemenet = document.getElementById("write_here");
        elemenet.style.color = "violet";
        elemenet.innerHTML = "Опитайте пак!";
    }
}

function restore() {
    for (var key in enteredInputs) {
        enteredInputs[key] = -1;
        document.getElementById(key).value = "";
    }

    var element = document.getElementById("write_here");
    element.style.color = "white";
    element.innerHTML = "Постави в празните полета цифрите от 1 до 8!";
}

function getInputs() {
    for (var id in enteredInputs) {
        var currentElement = document.getElementById(id).value;
        if (currentElement) {
            enteredInputs[id] = currentElement;
        }
    }
}

function checkValues() {
    for (var key in enteredInputs) {
        var value = enteredInputs[key];
        if (value < 1 || value > 8) {
            return false;
        }
    }
    return true;
}

function isRightOrder() {
    for (var key in enteredInputs) {
        if(enteredInputs[key] != rightInputs[key]) {
            return false;
        }
    }
    return true;
}

document.getElementById("check_button").addEventListener('click', checkOrder);
document.getElementById("restore_button").addEventListener('click', restore);