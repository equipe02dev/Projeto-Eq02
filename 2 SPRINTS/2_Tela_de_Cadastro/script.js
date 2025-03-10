let firstnameInput = document.getElementById("firstname");
console.log(firstnameInput);
let firstnameLbel = document.querySelector('label[for="firstname"]');
let firstnameHelper = document.getElementById("firstname-helper");

firstnameInput.addEventListener('change',(evento) => {
   let valor = evento.target.value;
   console.log(valor); 

    if(valor.length < 3){
        firstnameInput.classList.add('error');
        firstnameInput.classList.remove('success');
        firstnameHelper.classList.add('visible');
        firstnameHelper.innerText = "O nome deve ter no mínimo 3 caracteres";
    } else {
        firstnameInput.classList.remove('error');
        firstnameInput.classList.add('success');
        firstnameHelper.classList.remove('visible');
        firstnameHelper.innerText = "";
    }
});

let lastnameInput = document.getElementById("lastname");
console.log(lastnameInput);
let lastnameLabel = document.querySelector('label[for="lastname"]');
let lastnameHelper = document.getElementById("lastname-helper");

lastnameInput.addEventListener('change',(evento) => {
   let valor = evento.target.value;
   console.log(valor); 

    if(valor.length < 3){
        lastnameInput.classList.add('error');
        lastnameInput.classList.remove('success');
        lastnameHelper.classList.add('visible');
        lastnameHelper.innerText = "O nome deve ter no mínimo 3 caracteres";
    } else {
        lastnameInput.classList.remove('error');
        lastnameInput.classList.add('success');
        lastnameHelper.classList.remove('visible');
        lastnameHelper.innerText = "";
    }
});

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

let numberInput = document.getElementById("number");
console.log(numberInput);
let numberLabel = document.querySelector('label[for="number"]');
let numberHelper = document.getElementById("number-helper");

numberInput.addEventListener('change',(evento) => {
   let valor = evento.target.value;
   console.log(valor); 

    if(valor.length < 11){
        numberInput.classList.add('error');
        numberInput.classList.remove('success');
        numberHelper.classList.add('visible');
        numberHelper.innerText = "O nome deve ter no mínimo 3 caracteres";
    } else {
        numberInput.classList.remove('error');
        numberInput.classList.add('success');
        numberHelper.classList.remove('visible');
        
    }
});

let passwordInput = document.getElementById("password");
let confirmPasswordInput = document.getElementById("confirm-password");
let passwordHelper = document.getElementById("password-helper");
let confirmPasswordHelper = document.getElementById("confirm-password-helper");

function validarSenha() {
    let senha = passwordInput.value;
    
    if (senha.length < 8) {
        passwordInput.classList.add("error");
        passwordInput.classList.remove("success");
        passwordHelper.classList.add("visible");
        passwordHelper.innerText = "A senha deve ter no mínimo 8 caracteres";
    } else {
        passwordInput.classList.remove("error");
        passwordInput.classList.add("success");
        passwordHelper.classList.remove("visible");
        passwordHelper.innerText = "";
    }
}

function confirmarSenha() {
    let senha = passwordInput.value;
    let confirmacao = confirmPasswordInput.value;

    if (confirmacao === "") {
        confirmPasswordHelper.classList.remove("visible");
        confirmPasswordInput.classList.remove("error", "success");
    } else if (senha !== confirmacao) {
        confirmPasswordInput.classList.add("error");
        confirmPasswordInput.classList.remove("success");
        confirmPasswordHelper.classList.add("visible");
        confirmPasswordHelper.innerText = "As senhas não coincidem!";
    } else {
        confirmPasswordInput.classList.remove("error");
        confirmPasswordInput.classList.add("success");
        confirmPasswordHelper.classList.remove("visible");
        confirmPasswordHelper.innerText = "";
    }
}

passwordInput.addEventListener("change", validarSenha);
confirmPasswordInput.addEventListener("input", confirmarSenha);



