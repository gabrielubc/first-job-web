document.getElementById('jobForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Coleta os dados do formulário
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const education = document.getElementById('education').value;

    // Exibe um alerta com as informações coletadas
    alert(`Nome: ${name}\nEmail: ${email}\nEscolaridade: ${education}`);

    // Aqui você pode adicionar mais lógica, como enviar os dados para um servidor
});
