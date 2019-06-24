// code by webdevtrick (https://webdevtrick.com)
/*
function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}

Quiz.prototype.quess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
}

Quiz.prototype.isEnded = function() {
    return this.questionIndex === questions.length;
}

function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}

function populate() {
    if(quiz.isEnded) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        // show options
        var choices = quiz.getQuestionIndex().choices;
        for (var i = 0; i < choices.length; i++) {
            var element = document.getElementById("label" + i);
            element.innerHTML = choices[i];
            quess("radio" + i, choices[i]);
        }
    }
};

function guess(id, quess) {
    var radio_button = document.getElementById(id);
    radio_button.onselect = function() {
        quiz.guess(quess);
        populate();
    }
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

// create questions here
var questions = [
    new Question("Къде се намира астероидния пояс?", ["Между Земята и Марс", "Между Земята и Венера","Между Юпитер и Сатурн", "Между Марс и Юпитер"], "Между Марс и Юпитер"),
    new Question("Колко луни има Марс?", ["1", "2", "50", "13"], "2"),
    new Question("Коя е най-горещата планета в Слънчевата система?", ["Земя", "Юпитер","Венера", "Уран"], "Венера"),
    new Question("Коя от изброените планети е най-малката?", ["Земя", "Уран", "Юпитер", "Меркурий"], "Меркурий"),
    new Question("За колко часа Земята прави едно пълно завъртане около оста си?", ["12 часа", "24 часа", "356 часа", "1 час"], "24 часа"),
    new Question("От какво е съставено главно Слънцето?", ["Течна лава", "Разтопено желязо", "Скала", "Газ"], "Газ"),
    new Question("Кое най-добре описва атмосферата заобикаляща Венера?", ["Златиста и влажна", "Светлна и слънчева", "Гореща и отровна", "Златиста и снежна"], "Гореща и отровна"),
    new Question("Какво е Голяма червено петно (Great Red Spot) на Юпитер?", ["Буря", "Кратер", "Вулкан", "Езеро"], "Буря"),
    new Question("Коя е най-близката планета до Слънцето?", ["Юпитер", "Земя", "Меркурий", "Марс"], "Меркурий"),
    new Question("На коя планета живеят хората?", ["Юпитер", "Земя", "Венера", "Марс"], "Земя")
];

// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();

*/
/*


 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 

*/
var allQuestions = [
    {
        question: "Къде се намира астероидния пояс?",
        choices: ["Между Земята и Марс", "Между Земята и Венера", "Между Юпитер и Сатурн", "Между Марс и Юпитер"],
        correctAnswer: 3
    },
    {
        question: "Колко луни има Марс?",
        choices: ["1", "2", "50", "13"],
        correctAnswer: 1
    },
    {
        question: "Коя е най-горещата планета в Слънчевата система?",
        choices: ["Земя", "Юпитер", "Венера", "Уран"],
        correctAnswer: 2
    },
    {
        question: "Коя от изброените планети е най-малката?",
        choices: ["Земя", "Уран", "Юпитер", "Меркурий"],
        correctAnswer: 3
    },
    {
        question: "За колко часа Земята прави едно пълно завъртане около оста си?",
        choices: ["12 часа", "24 часа", "356 часа", "1 час"],
        correctAnswer: 1
    },
    {
        question: "От какво е съставено главно Слънцето?",
        choices: ["Течна лава", "Разтопено желязо", "Скала", "Газ"],
        correctAnswer: 3
    },
    {
        question: "Кое най-добре описва атмосферата заобикаляща Венера?",
        choices: ["Златиста и влажна", "Светлна и слънчева", "Гореща и отровна", "Златиста и снежна"],
        correctAnswer: 2
    },
    {
        question: "Какво е Голяма червено петно (Great Red Spot) на Юпитер?",
        choices: ["Буря", "Кратер", "Вулкан", "Езеро"],
        correctAnswer: 0
    },
    {
        question: "Коя е най-близката планета до Слънцето?",
        choices: ["Юпитер", "Земя", "Меркурий", "Марс"],
        correctAnswer: 2
    },
    {
        question: "На коя планета живеят хората?",
        choices: ["Юпитер", "Земя", "Венера", "Марс"],
        correctAnswer: 1
    }
];

var score = 0;
var currentNumber = 0;

function createQuestion() {
    for (var i = 0; i < allQuestions[this.currentNumber].choices.length; i++) {
        document.forms.radioAnswers.elements.choice[i].checked = false;
    }
    var question = document.getElementById("question");
    question.innerHTML = allQuestions[this.currentNumber].question;
    /*var point = document.getElementById("point");
    point.innerHTML = "<span>score: " + score + "</span>";*/
    createChoices();
}
function createChoices() {
    for (var i = 0; i < allQuestions[this.currentNumber].choices.length; i++) {
        var option = document.getElementById("label" + i);
        option.innerHTML = allQuestions[this.currentNumber].choices[i];
    }
}
function nextQuestion() {
    for (var i = 0; i < allQuestions[this.currentNumber].choices.length; i++) {
        if (document.forms.radioAnswers.elements.choice[i].checked == true) {
            var userAnswer = document.forms.radioAnswers.elements.choice[i].value;
            if (userAnswer == allQuestions[this.currentNumber].correctAnswer) {
                this.score++;
            }
        }
    }
    this.currentNumber++;
    if (this.currentNumber == allQuestions.length) {
        showScore();
    }
    else {
        createQuestion();
    }
}
function showScore() {
    document.forms.radioAnswers.style.display = "none";
    var question = document.getElementById("question");
    question.style.display = "none";
    var elt = document.getElementById("point");
    elt.style.display = "block";
    var button = document.getElementById("next");
    button.style.display = "none";
    
    var point = document.getElementById("point");
    point.innerHTML = "<span>Result: " + score + " scores</span>";
}

window.onload = createQuestion();


document.getElementById("btn_question").addEventListener('click', redirectToForm);

function redirectToForm() {
    window.location.href='questionForm.html';
}