
document.getElementById("add_btn").addEventListener('click', addQuestion);
document.getElementById("cancel_btn").addEventListener('click', redirectToQuizPage);

function addQuestion() {
    if (!isDataInputed()) {
        let element = document.getElementById("write_here");
        let text = "<h3>Всички полета са задължителни!</h3>";
        element.innerHTML = text;
        reset();
    } else {
        let element = document.getElementById("write_here");
        let text = "<h3>Вашият въпрос беше изпратен успешно!</h3>";
        element.innerHTML = text;
        document.getElementById("labels").style.display = "none";
        document.getElementById("add_btn").value = "Към Забавления";
        document.getElementById("add_btn").addEventListener('click', redirectToGames);
    }
}

function isDataInputed() {
    let question_name = document.getElementById("question_name").value;
    let true_answer = document.getElementById("true_answer").value;
    let false_answer_1 = document.getElementById("false_answer_1").value;
    let false_answer_2 = document.getElementById("false_answer_2").value;
    let false_answer_3 = document.getElementById("false_answer_3").value;
    let link = document.getElementById("link").value;

    if (question_name === "" || true_answer === "" || false_answer_1 === "" || false_answer_2 === "" || false_answer_3 === "" || link === "") {
        return false;
    }
    return true;
}

function reset() {
    document.getElementById("question_name").value = "";
    document.getElementById("true_answer").value = "";
    document.getElementById("false_answer_1").value = "";
    document.getElementById("false_answer_2").value = "";
    document.getElementById("false_answer_3").value = "";
    document.getElementById("link").value = "";
}

function redirectToQuizPage() {
    window.location.href = 'quiz.html';
}

function redirectToGames() {
    window.location.href = 'listGames.html';
}