function enviarMensagem() {
  var mensagemInput = document.getElementById('mensagemInput');
  var mensagem = mensagemInput.value;

  // Adicione aqui a lógica para enviar a mensagem
  let divONGZ=document.querySelector(".minha_msg");
    let str = `<div style = "background-color:  lightgreen; padding: 10px; border-radius:10px; max-width: 150px; margin-top:10px"> ${mensagem}</div>`
  divONGZ.innerHTML+=str;
  // Limpe o campo de entrada após o envio
  mensagemInput.value = '';
}


function swap() {
    let naolida = document.querySelectorAll(".blococontato");

    naolida.forEach(element => {
        let imagem2 = element.querySelector(".imgbox img").src;
        let nomeONG2 = element.querySelector(".topolista h5").textContent;
        let mensagem2 = element.querySelector(".texto").textContent;

        element.querySelector(".imgbox img").src = document.querySelector(".lateralDireita img").src;
        element.querySelector(".topolista h5").textContent = document.querySelector(".lateralDireita .nomeONG").textContent;
        element.querySelector(".texto").textContent = document.querySelector(".lateralDireita .mensagem").textContent;

        document.querySelector(".lateralDireita img").src = imagem2;
        document.querySelector(".lateralDireita .nomeONG").textContent = nomeONG2;
        document.querySelector(".lateralDireita .mensagem").textContent = mensagem2;
        let divONGZ=document.querySelector(".minha_msg");
        divONGZ.innerHTML = "";
    });
}

function searchContacts() {
    // Obter o valor digitado no campo de pesquisa
    var searchTerm = document.getElementById('searchInput').value.toLowerCase();

    // Obter todos os blocos de contatos
    var blocosContato = document.querySelectorAll('.blococontato');

    // Iterar sobre os blocos de contatos e mostrar/ocultar com base na pesquisa
    blocosContato.forEach(element => {
        var nomeContato = element.querySelector('.topolista h5').textContent.toLowerCase();
        if (nomeContato.includes(searchTerm)) {
            // Se o nome do contato incluir a pesquisa, mostrar o bloco
            element.style.display = 'flex';
        } else {
            // Caso contrário, ocultar o bloco
            element.style.display = 'none';
        }
    });
}




