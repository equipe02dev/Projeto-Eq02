document.addEventListener("DOMContentLoaded", function () {
    function validarNome(nome) {
        return nome.length >= 3;
    }

    function validarTelefone(telefone) {
        return telefone.replace(/\D/g, "").length >= 10;
    }

    function validarSenha(senha) {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/;
        return regex.test(senha);
    }

    function adicionarEventoValidacao(input, label, helper, validacao, mensagemErro) {
        if (input && label && helper) {
            input.addEventListener("input", (evento) => {
                let valor = evento.target.value;
                if (validacao(valor)) {
                    label.classList.remove("error");
                    input.classList.remove("error");
                    input.classList.add("correct");
                    helper.classList.remove("visible");
                    helper.innerText = "";
                } else {
                    label.classList.add("error");
                    input.classList.add("error");
                    input.classList.remove("correct");
                    helper.classList.add("visible");
                    helper.innerText = mensagemErro;
                }
            });
        }
    }

    
    adicionarEventoValidacao(
        document.getElementById("firstname"),
        document.querySelector('label[for="firstname"]'),
        document.getElementById("firstname-helper"),
        validarNome,
        "O nome precisa ter no mínimo 3 caracteres"
    );
    
    adicionarEventoValidacao(
        document.getElementById("lastname"),
        document.querySelector('label[for="lastname"]'),
        document.getElementById("lastname-helper"),
        validarNome,
        "O sobrenome precisa ter no mínimo 3 caracteres"
    );
    
    adicionarEventoValidacao(
        document.getElementById("number"),
        document.querySelector('label[for="number"]'),
        document.getElementById("number-helper"),
        validarTelefone,
        "Digite um número de telefone válido (mínimo 10 dígitos)"
    );

    // Função para validar senha e confirmação de senha
    function validarSenhaCampos() {
        let passwordInput = document.getElementById("password");
        let passwordHelper = document.getElementById("password-helper");
        let confirmPasswordInput = document.getElementById("confirm-password");
        let confirmPasswordHelper = document.getElementById("confirm-password-helper");

        if (passwordInput && passwordHelper) {
            passwordInput.addEventListener("input", () => {
                let valor = passwordInput.value;
                if (validarSenha(valor)) {
                    passwordInput.classList.remove("error");
                    passwordInput.classList.add("correct");
                    passwordHelper.classList.remove("visible");
                    passwordHelper.innerText = "";
                } else {
                    passwordInput.classList.add("error");
                    passwordInput.classList.remove("correct");
                    passwordHelper.classList.add("visible");
                    passwordHelper.innerText = "A senha deve ter no mínimo 8 caracteres, com uma letra maiúscula, uma minúscula, um número e um caractere especial.";
                }
            });
        }

        if (confirmPasswordInput && confirmPasswordHelper) {
            confirmPasswordInput.addEventListener("input", () => {
                if (confirmPasswordInput.value === passwordInput.value) {
                    confirmPasswordInput.classList.remove("error");
                    confirmPasswordInput.classList.add("correct");
                    confirmPasswordHelper.classList.remove("visible");
                    confirmPasswordHelper.innerText = "";
                } else {
                    confirmPasswordInput.classList.add("error");
                    confirmPasswordInput.classList.remove("correct");
                    confirmPasswordHelper.classList.add("visible");
                    confirmPasswordHelper.innerText = "As senhas não coincidem.";
                }
            });
        }
    }

    
    validarSenhaCampos();
});
