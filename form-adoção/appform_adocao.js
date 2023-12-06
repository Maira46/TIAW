document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const idade = document.getElementById('idade').value;
    const telefone = document.getElementById('telefone').value;
    const animal = document.getElementById('animal').value;
    const tempo = document.getElementById('tempo').value;
    const experiencia = document.getElementById('experiencia').value;
    const moradia = document.getElementById('moradia').value;
    const custos = document.getElementById('custos').value;
    const mudanca = document.getElementById('mudanca').value;

    const camposPreenchidos = [name, idade, telefone, animal, tempo, experiencia, moradia, custos, mudanca]

    if (camposPreenchidos.every(valor => valor.trim() !== '')) {
      
      const formData = {
        nome: name,
        idade: idade,
        telefone: telefone,
        animal: animal,
        tempo: tempo,
        experiencia: experiencia,
        moradia: moradia,
        custos: custos,
        mudanca: mudanca
      };

      
      fetch('https://jsonserver-formulario-1.geoprtu.repl.co/adotantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          console.log('Dados enviados:', data);

          alert('Formulário enviado com sucesso');

          document.getElementById('name').value = '';
          document.getElementById('idade').value = '';
          document.getElementById('telefone').value = '';
          document.getElementById('animal').value = '';
          document.getElementById('tempo').value = '';
          document.getElementById('experiencia').value = '';
          document.getElementById('moradia').value = '';
          document.getElementById('custos').value = '';
          document.getElementById('mudanca').value = '';
        })
        .catch(error => {
          console.error('Erro:', error);
        });
    } else {

      alert('Preencha todos os campos do formulário.');

      setTimeout(function () {
        const inputs = document.querySelectorAll('input');
        for (let input of inputs) {
          if (input.value.trim() === '') {
            input.focus();
          }
        }
      }, 5000); 
    }
  });