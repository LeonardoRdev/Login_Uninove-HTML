function validar() {
    let user = document.querySelector("form input#user").value; 
    /*o querySelector funciona igual o css:
    exemplo: main p.paragrafo ou main p#paragrafo*/
    let password = document.querySelector("form input#password").value;
    let mensagem = document.querySelector("main p#mensagem_main");
    if (user == "admin" && password=="uninove") {
        mensagem.innerHTML = "Acesso CONCEDIDO";
        mensagem.style.color = "#2af76b";
        mensagem.style.display = "flex";
        setTimeout(() => window.open("https://aluno.uninove.br/seu/CENTRAL/aluno/"), 500) /*espera 0.5 segundos antes de abrir a página*/
    } else {
        mensagem.innerHTML = "Acesso NEGADO"
        mensagem.style.color = "#f72a2a"
        mensagem.style.display = "flex";
    }
}


function lembrar() {
    let mensagem = document.querySelector("main p#mensagem_main");
    mensagem.innerHTML = "Usuário: admin <br> Senha: uninove";
    mensagem.style.color = "#f1f1f1";
    mensagem.style.display = "flex";
}

function missao() {
    let mensagem = document.querySelector("main p#mensagem_main");
    mensagem.innerHTML = "Missão:<br> A missão da Uninove é ensinar e capacitar todos os alunos para que sejam aptos a entrar no mercado de trabalho";
    mensagem.style.display = "flex";
    mensagem.style.color = "#f1f1f1";
    mensagem.style.textDecoration = "none";
}
