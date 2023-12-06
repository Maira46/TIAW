// URL da API JSONServer:
const apiUrl = 'https://jsonserver-animais.geoprtu.repl.co/animais';

function displayMessage(mensagem) {
    msg = document.getElementById('msg');
    msg.innerHTML = '<div class="alert alert-warning">' + mensagem + '</div>';
}

function readAnimais(processaDados) {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            processaDados(data);
        })
        .catch(error => {
            console.error('Erro ao ler animais via API JSONServer:', error);
            displayMessage("Erro ao ler animais");
        });
}

function createAnimais(animais, refreshFunction) {
    fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(animais),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Animal inserido com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao inserir animal via API JSONServer:', error);
            displayMessage("Erro ao inserir animal");
        });
}

function updateAnimais(id, animais, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(animais),
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Animal alterado com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao atualizar animal via API JSONServer:', error);
            displayMessage("Erro ao atualizar animal");
        });
}

function deleteAnimais(id, refreshFunction) {
    fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(data => {
            displayMessage("Animal removida com sucesso");
            if (refreshFunction)
                refreshFunction();
        })
        .catch(error => {
            console.error('Erro ao remover animal via API JSONServer:', error);
            displayMessage("Erro ao remover animal");
        });
}