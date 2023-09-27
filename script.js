function validar(user, password) {
    let mensagem = document.querySelector("main p#mensagem_main")
    if (user == "admin" && password=="uninove") {
        mensagem.innerHTML = "Acesso CONCEDIDO"
        mensagem.style.color = "#2af76b"
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
    mensagem.style.color = "#212121";
    mensagem.style.display = "flex";
}
