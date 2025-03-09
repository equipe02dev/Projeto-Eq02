document.addEventListener("DOMContentLoaded", function () {
    let emailInput = document.getElementById("email");
    let emailLabel = document.querySelector('label[for="email"]');
    let emailHelper = document.getElementById("email-helper");

    function validarEmail(email) {
        let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    if (emailInput && emailLabel && emailHelper) {
        emailInput.addEventListener("input", (evento) => {
            let valor = evento.target.value;
            if (validarEmail(valor)) {
                emailLabel.classList.remove("error");
                emailInput.classList.remove("error");
                emailInput.classList.add("correct");
                emailHelper.classList.remove("visible");
            } else {
                emailLabel.classList.add("error");
                emailInput.classList.add("error");
                emailInput.classList.remove("correct");
                emailHelper.classList.add("visible");
                emailHelper.innerText = "Digite um email válido (ex: nome@dominio.com)";
            }
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let passwordInput = document.getElementById("password");
    let passwordLabel = document.querySelector('label[for="password"]');
    let passwordHelper = document.getElementById("password-helper");

    function validarSenha(senha) {
        const regras = [
            { regex: /.{8,}/, mensagem: "A senha deve ter pelo menos 8 caracteres." },
            { regex: /[A-Z]/, mensagem: "A senha deve conter pelo menos uma letra maiúscula." },
            { regex: /[a-z]/, mensagem: "A senha deve conter pelo menos uma letra minúscula." },
            { regex: /[0-9]/, mensagem: "A senha deve conter pelo menos um número." },
            { regex: /[\W_]/, mensagem: "A senha deve conter pelo menos um caractere especial." }
        ];

        for (let regra of regras) {
            if (!regra.regex.test(senha)) {
                return regra.mensagem;
            }
        }
        return null; // Senha válida
    }

    if (passwordInput && passwordLabel && passwordHelper) {
        passwordInput.addEventListener("input", (evento) => {
            let valor = evento.target.value;
            let mensagemErro = validarSenha(valor);

            if (!mensagemErro) {
                // Senha válida
                passwordLabel.classList.remove("error");
                passwordInput.classList.remove("error");
                passwordInput.classList.add("correct");
                passwordHelper.classList.remove("visible");
                passwordHelper.innerText = "";
            } else {
                // Senha inválida
                passwordLabel.classList.add("error");
                passwordInput.classList.add("error");
                passwordInput.classList.remove("correct");
                passwordHelper.classList.add("visible");
                passwordHelper.innerText = mensagemErro;
            }
        });
    }
});
