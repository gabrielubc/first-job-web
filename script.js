document.getElementById('cadastrar').addEventListener('click', function() {
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const escolaridade = document.getElementById('escolaridade').value;
    
    if (nome && email && escolaridade) {
        alert('Cadastro realizado com sucesso!');
    } else {
        alert('Por favor, preencha todos os campos.');
    }
});
