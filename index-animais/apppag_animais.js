const apiUrl = 'https://jsonserver-animais.geoprtu.repl.co/animais';
const listaOngs = document.getElementById('listaOngs');
const inputBusca = document.getElementById('inputBusca');

let instituicoes = []; // Para armazenar as organizações carregadas

function exibirOrganizacoes(instituicoes) {
  listaOngs.innerHTML = '';

  instituicoes.forEach((animals) => {
    const card = document.createElement('div');
    card.classList.add('col', 'col-md-3', 'mb-4');
    card.setAttribute('data-id', animals.id);
    card.innerHTML = `
      <div class="card">
        <a href="perfil_animal.html?id=${animals.id}">
          <img src="${animals.imagem}" class="card-img-top" alt="${animals.nome}">
        </a>
        <div class="card-body">
          <h5 class="card-title">${animals.nome}</h5>
          <p class="card-text">${animals.descricao}</p>
          <hr>
          <p class="card-text">${animals.porte}</p>
        </div>
      </div>
    `;

    listaOngs.appendChild(card);
  });
}



function displayMessage(message) {
  const messageDiv = document.createElement('div');
  messageDiv.innerText = message;
  listaOngs.innerHTML = ''; 
  listaOngs.appendChild(messageDiv);
}

function filtrar() {
  const filtro = inputBusca.value.trim().toLowerCase();
  
  const organizacoesFiltradas = instituicoes.filter((animals) => {
    const nomeInstituicao = animals.nome.toLowerCase();
    const descricaoInstituicao = animals.descricao.toLowerCase();

    return nomeInstituicao.includes(filtro) || descricaoInstituicao.includes(filtro);
  });

  exibirOrganizacoes(organizacoesFiltradas);
}

inputBusca.addEventListener('input', filtrar); 

function readInstituicoes(processaDados) {
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      processaDados(data);
    })
    .catch(error => {
      console.error('Erro ao ler instituições via API JSONServer:', error);
      displayMessage("Erro ao ler instituições");
    });
}

window.onload = () => {
  readInstituicoes(data => {
    instituicoes = data; 
    exibirOrganizacoes(data);
  });
};
