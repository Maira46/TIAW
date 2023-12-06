document.addEventListener('DOMContentLoaded', function () {
  // Função para obter parâmetro da URL
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }

  // Obtém o valor do parâmetro 'id' da URL
  var userId = getParameterByName('id');

  // Se o 'id' estiver presente, faz a solicitação para o servidor de usuários
  if (userId) {
    // Faz a solicitação ao servidor de usuários
    fetch(`https://jsonserver-cadastro-usuarios.thaisthatareis.repl.co/usuarios/${userId}`)
      .then(response => response.json())
      .then(user => {
        // Exibe as informações do usuário no div 'user-info'
        var userInfoDiv = document.getElementById('user-info');
        userInfoDiv.innerHTML = `
          <div class="form-group row">
            <div class="col-sm-4">
              <strong>Name:</strong> <p>${user.nome}</p>
            </div>
            <div class="col-sm-3">
              <strong>Email:</strong> <p>${user.email}</p>
            </div>
            <div class="col-sm-2">
              <strong>Senha:</strong> <p>${user.senha}</p>
            </div>
            <div class="col-sm-3">
              <strong>Tipo de perfil:</strong> <p>${user.instpessoa}</p>
            </div>
          </div>
          <input type="button" onclick="mostrarPopup()" value="alterar dados">
          <div id="meuPopup" class="popup">
            <form id="form-contato">
              <div class="form-group row">
                <div class="col-sm-4">
                  <label for="inputNome">Nome: </label>
                  <input type="text" class="form-control" id="inputNome" required placeholder="alterar nome">
                </div>
                <div class="col-sm-3">
                  <label for="inputEmail">E-mail:</label>
                  <input type="email" class="form-control" id="inputEmail" required placeholder="alterar e-mail">
                </div>
                <div class="col-sm-2">
                  <label for="inputCidade">Senha:</label>
                  <input type="text" class="form-control" id="inputCidade" placeholder="alterar senha">
                </div>
              </div>
            </form>
            <div class="form-group row">
              <div class="col-sm-1">
                <input type="button" id="btnUpdate" value="salvar">
              </div>
              <br>
              <div class="col-sm-2">
                <input type="button" onclick="fecharPopup()" value="fechar">
              </div>
            </div>
          </div>
        `;

        // Chama a função para buscar e exibir informações dos animais
        obterInfoAnimal(userId);
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  } else {
    // Se 'id' não estiver presente, exibe uma mensagem de erro
    var userInfoDiv = document.getElementById('user-info');
    userInfoDiv.innerHTML = '<p>Error: User ID not specified in the URL.</p>';
  }
});

// Função para obter e exibir informações dos animais
function obterInfoAnimal(userId) {
  // Faz a solicitação ao servidor de animais
  fetch(`https://jsonserver-animais.geoprtu.repl.co/animais/${userId}`)
    .then(response => response.json())
    .then(animal => {
      // Exibe as informações do animal no div 'animal-cards'
      var animalCardsDiv = document.getElementById('animal-cards');
      animalCardsDiv.innerHTML = `
        <div class="animal-card">
           <img src ="${animal.imagem}" width="100%" class="card-img-top">
            <h3 class="card-title">${animal.nome}</h3>
            <p> ${animal.descricao}</p>
            <p> ${animal.idade} Anos</p>
            <hr>
            <p class="card-text">Porte: ${animal.porte}</p>
          
        </div>
      `;
    })
    .catch(error => {
      console.error('Error fetching animal data:', error);
    });
}

function mostrarPopup() {
  document.getElementById('meuPopup').style.display = 'block';
}

function fecharPopup() {
  document.getElementById('meuPopup').style.display = 'none';
}
