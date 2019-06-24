var email = "admin@gmail.com";
var password = "admin";

function redirectToAdminPage() {
    let inputEmail = document.getElementById("inputEmail").value;
    let inputPassword = document.getElementById("inputPassword").value;

    if (email == inputEmail && password == inputPassword) {
        window.location.href = 'indexAdmin.html';
    }

}
document.getElementById("btn_login").addEventListener('click', redirectToAdminPage);