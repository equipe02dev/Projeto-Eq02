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

let passwordInput = document.getElementById("password");
let passwordLabel = document.querySelector('label[for="password"]');
let passwordHelper = document.getElementById("password-helper");

passwordInput.addEventListener('change',(evento) => {
   let valor = evento.target.value;
   console.log(valor); 

    if(valor.length < 8){
        passwordInput.classList.add('error');
        passwordInput.classList.remove('success');
        passwordHelper.classList.add('visible');
        passwordHelper.innerText = "A senha deve ter no mínimo 8 caracteres";
    } else {
        passwordInput.classList.remove('error');
        passwordInput.classList.add('success');
        passwordHelper.classList.remove('visible');
        passwordHelper.innerText = "";
    }
}); 