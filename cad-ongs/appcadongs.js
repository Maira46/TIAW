// URL da API JSONServer:
const apiUrl = 'https://jsoninstituicoes.geoprtu.repl.co/instituicoes'; 

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

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

function createInstituicao(instituicao, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(instituicao),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Instituição inserida com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir instituição via API JSONServer:', error);
            displayMessage("Erro ao inserir instituição");
        });
}

function updateInstituicao(id, instituicao, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(instituicao),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Instituição alterado com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar instituição via API JSONServer:', error);
            displayMessage("Erro ao atualizar instituicao");
        });
}

function deleteInstituicao(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Instituição removida com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover instituição via API JSONServer:', error);
            displayMessage("Erro ao remover instituição");
        });
}