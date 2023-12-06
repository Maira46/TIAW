
async function fetchAndDisplayUserInfo(idUsuario) {
    try {
        const response = await fetch(`https://jsonserver-cadastro-usuarios.thaisthatareis.repl.co/usuarios/${idUsuario}`);
        const userData = await response.json();


        displayUserInfo(userData);
    } catch (error) {
        console.error('Erro ao buscar dados do servidor de usuários:', error);
    }
}

async function fetchAndDisplayAnimalCards(idUsuario) {
    try {
        const response = await fetch(`https://jsonserver-1.nalndaliu.repl.co/animais?userId=${idUsuario}`);
        const animalData = await response.json();

        // Exibe os cards dos animais na página
        displayAnimalCards(animalData);
    } catch (error) {
        console.error('Erro ao buscar dados do servidor de animais:', error);
    }
}

function displayUserInfo(userData) {
    const userInfoElement = document.getElementById('user-info');

    const userInfoDiv = document.createElement('div');
    userInfoDiv.classList.add('user-info');
    userInfoDiv.innerHTML = `
    <div class="form-group row">
    <div class="col-sm-3">
        <p><strong>Nome:</strong> ${userData.nome}</p>
        </div>
        <div class="col-sm-3">
        <p><strong>E-mail:</strong> ${userData.email} 
        </div>
        <div class="col-sm-3">
         <strong>Cidade:</strong> ${userData.instpessoa}</p>
         </div>
         <div class="col-sm-3">
        <p><strong>Telefone:</strong> ${userData.telefone}</p>
        </div>
        </div>
        <input type="button" onclick="mostrarPopup()"value="alterar dados">
        <div id="meuPopup" class="popup">
         <form id="form-contato">
            <div class="form-group row">
                <div class="col-sm-5">
                    <label for="inputNome">Nome: </label>
                    <input type="text" class="form-control" id="inputNome" required placeholder="alterar nome">
                </div>

                <div class="col-sm-3">
                    <label for="inputEmail">E-mail:</label>
                    <input type="email" class="form-control" id="inputEmail" required placeholder="alterar e-mail">
                </div>
                <div class="col-sm-2">
                    <label for="inputCidade">Cidade:</label>
                    <input type="text" class="form-control" id="inputCidade" placeholder="alterar cidade">
                </div>
                <div class="col-sm-2">
                    <label for="inputTelefone">Telefone:</label>
                    <input type="text" class="form-control" id="inputTelefone" required placeholder="alterar telefone">
                </div>

            </div>
        </form>
        <div class="form-group row">
        <div class="col-sm-1">
         <input type="button" id="btnUpdate" value="salvar">   
         </div><br>
         <div class="col-sm-2">
        <input type="button" onclick="fecharPopup()" value="fechar">
        </div>
          </div>
    `;

    userInfoElement.appendChild(userInfoDiv);
}
 function mostrarPopup() {
     document.getElementById('meuPopup').style.display = 'block';
 }

 function fecharPopup() {
     document.getElementById('meuPopup').style.display = 'none';
 }

function updateContato(id, contato, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(contato),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Dados alterados com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar contato via API JSONServer:', error);
            displayMessage("Erro ao atualizar contato");
        });
}

function displayAnimalCards(animalData) {
    const animalCardsElement = document.getElementById('animal-cards');

    animalData.forEach(animal => {
        const card = document.createElement('div');
        card.classList.add('col','col-md-3', 'mb-4');
        card.innerHTML = `

        <div class="animal-card">
        <img src ="${animal.foto}" width="100%" class="card-img-top">
            <h3>${animal.nome}</h3>
            <p> ${animal.descricao}</p>
            <hr>
            <p class="card-text"> ${animal.porte}</p>
        </div>
        `;
        animalCardsElement.appendChild(card);
    });
}


const userId = 1; 
fetchAndDisplayUserInfo(userId);
fetchAndDisplayAnimalCards(userId);