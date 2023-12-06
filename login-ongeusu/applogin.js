var formUsuario = document.querySelector('#usuario');
var formOng = document.querySelector('#ong');
var btnSignin = document.querySelector('#btnSignin');
var btnSignup = document.querySelector('#btnSignup');
var btnColor = document.querySelector('.btnColor');

btnSignin.addEventListener('click', () => {
    formUsuario.style.left = "25px";
    formOng.style.left = "450px";
    btnColor.style.left = "0px";
});

btnSignup.addEventListener('click', () => {
    formUsuario.style.left = "-450px";
    formOng.style.left = "25px";
    btnColor.style.left = "110px";
});

formUsuario.addEventListener('submit', function(event) {
    event.preventDefault();

    var login = document.querySelector('#usuario input[type="text"]').value;
    var senha = document.querySelector('#usuario input[type="password"]').value;

    if (login === "isabelasouza@gmail.com" && senha === "12345") {
        alert('Login bem-sucedido! Redirecionando para a página de usuário.');
        window.location.href = "../perfil-usuario/indexperfil_usuario.html";
    } else {
        alert('Usuário ou senha incorretos');
    }
});

formOng.addEventListener('submit', function(event) {
    event.preventDefault();

    var login = document.querySelector('#ong input[type="text"]').value;
    var senha = document.querySelector('#ong input[type="password"]').value;

    if (login === "ong" && senha === "senhaong") {
        alert('Login bem-sucedido! Redirecionando para a página da ONG.');
        window.location.href = "#";
    } else {
        alert('Usuário ou senha incorretos');
    }
});


