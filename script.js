function validar() {
    let user = document.querySelector("form input#user").value;
    /*o querySelector funciona igual o css:
    exemplo: main p.paragrafo ou main p#paragrafo*/
    let password = document.querySelector("form input#password").value;
    let mensagem = document.querySelector("main p#mensagem_main");
    if (user == "admin" && password == "uninove") {
        mensagem.innerHTML = "Acesso CONCEDIDO";
        mensagem.style.textDecoration = "underline";
        mensagem.style.color = "#2af76b";
        mensagem.style.display = "flex";
        setTimeout(() => window.open("https://aluno.uninove.br/seu/CENTRAL/aluno/"), 500) /*espera 0.5 segundos antes de abrir a página*/
    } else {
        mensagem.innerHTML = "Acesso NEGADO";
        mensagem.style.textDecoration = "underline";
        mensagem.style.color = "#f72a2a"
        mensagem.style.display = "flex";
    }
}


function lembrar() {
    let mensagem = document.querySelector("main p#mensagem_main");
    mensagem.innerHTML = "Usuário: admin <br> Senha: uninove";
    mensagem.style.color = "#f1f1f1";
    mensagem.style.display = "flex";
    mensagem.style.textDecoration = "none";
}


function missao() {
    let mensagem = document.querySelector("main p#mensagem_main");
    mensagem.innerHTML = "Missão:<p id='descricao_missao'> Nossa missão é ensinar e capacitar todos os alunos para que sejam aptos a entrar no mercado de trabalho.</p>";
    let mensagemMissao = document.querySelector("main p#mensagem_main p#descricao_missao");
    mensagemMissao.style.display = "flex";
    mensagemMissao.style.fontSize = "2rem";
    mensagem.style.display = "flex";
    mensagem.style.color = "#f1f1f1"
    mensagem.style.textDecoration = "none";
}

function limpar_mensagem() {
    let mensagem = document.querySelector("main p#mensagem_main");
    mensagem.style.display = "none";
}

function curso() {
    let mensagem = document.querySelector("main p#mensagem_main");
    mensagem.innerHTML = "Cursos:<p id='descricao_cursos'> A Uninove oferece diversos cursos de alta qualidade em diversas áreas do conhecimento, preparando os alunos para o mercado de trabalho e valorizando a inovação e o empreendedorismo.</p>";
    let mensagemCurso = document.querySelector("main p#mensagem_main p#descricao_cursos");
    mensagemCurso.style.display = "flex";
    mensagemCurso.style.fontSize = "2rem";
    mensagem.style.color = "white";
    mensagem.style.textDecoration = "none";
    mensagem.style.display = "flex";
}

function mudaTema() {
    let botao = document.querySelector("footer button");
    let corpo = document.querySelector("body");
    if (botao.textContent == "🌞") {
        corpo.style.backgroundColor = "gray";
        botao.innerHTML = "🌑";
    } else {
        corpo.style.backgroundColor = "white";
        botao.textContent = "🌞"
    }
}
