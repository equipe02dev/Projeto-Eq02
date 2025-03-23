let emailInput = document.getElementById("email");
let emailHelper = document.getElementById("email-helper");

// Use o evento 'input' para validar enquanto o usuário digita
emailInput.addEventListener('input', (evento) => {
    let valor = evento.target.value;
    console.log(valor);

    // Verifica se o e-mail NÃO contém "@" ou ".com"
    if (!valor.includes('@') || !valor.includes('.com')) {
        emailInput.classList.add('error');
        emailInput.classList.remove('success');
        emailHelper.classList.add('visible');
        emailHelper.innerText = "O email deve conter @ e .com";
    } else {
        emailInput.classList.remove('error');
        emailInput.classList.add('success');
        emailHelper.classList.remove('visible');
        emailHelper.innerText = "";
    }
});

cepInput.addEventListener('input', () => {
    let cep = cepInput.value.replace(/\D/g, ''); // Remove tudo que não é número
    cep = cep.replace(/^(\d{5})(\d)/, '$1-$2'); // Adiciona o hífen após os 5 primeiros dígitos
    cepInput.value = cep;
});