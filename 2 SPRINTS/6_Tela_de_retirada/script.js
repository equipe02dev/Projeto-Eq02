document.addEventListener("DOMContentLoaded", function () {
    // ================================
    // Validação do CEP
    // ================================
    const cepInput = document.getElementById("cep");
    const cepHelper = document.getElementById("cep-helper");

    function validarCEP(cep) {
        return /^\d{8}$/.test(cep); // CEP deve ter exatamente 8 dígitos numéricos
    }

    cepInput.addEventListener("input", function () {
        cepInput.value = cepInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

        if (validarCEP(cepInput.value)) {
            cepInput.classList.remove("error");
            cepInput.classList.add("correct");
            cepHelper.classList.remove("error");
            cepHelper.classList.add("correct");
            cepHelper.innerText = "CEP válido.";
        } else {
            cepInput.classList.add("error");
            cepInput.classList.remove("correct");
            cepHelper.classList.add("error");
            cepHelper.classList.remove("correct");
            cepHelper.innerText = "CEP inválido. Digite exatamente 8 números.";
        }
    });

    // ================================
    // Validação do Número
    // ================================
    const numeroInput = document.getElementById("numero");
    const numeroHelper = document.getElementById("numero-helper");

    // Bloquear caracteres não numéricos
    numeroInput.addEventListener("keydown", function (event) {
        if (!/\d/.test(event.key) && event.key !== "Backspace" && event.key !== "Tab") {
            event.preventDefault();
        }
    });

    function validarNumero(numero) {
        return /^\d+$/.test(numero); // Apenas números
    }

    numeroInput.addEventListener("input", function () {
        numeroInput.value = numeroInput.value.replace(/\D/g, ""); // Remove caracteres não numéricos

        if (validarNumero(numeroInput.value) && numeroInput.value.length > 0) {
            numeroInput.classList.remove("error");
            numeroInput.classList.add("correct");
            numeroHelper.classList.remove("error");
            numeroHelper.classList.add("correct");
            numeroHelper.innerText = "Número válido.";
        } else {
            numeroInput.classList.add("error");
            numeroInput.classList.remove("correct");
            numeroHelper.classList.add("error");
            numeroHelper.classList.remove("correct");
            numeroHelper.innerText = "Número inválido. Digite apenas números.";
        }
    });

    // ================================
    // Impedir envio do formulário com erro
    // ================================
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function (event) {
            let erro = false;

            if (!validarNumero(numeroInput.value) || numeroInput.value.length === 0) {
                erro = true;
                numeroInput.classList.add("error");
                numeroInput.classList.remove("correct");
                numeroHelper.classList.add("error");
                numeroHelper.classList.remove("correct");
                numeroHelper.innerText = "Número inválido. Digite apenas números.";
            }

            if (!validarCEP(cepInput.value)) {
                erro = true;
                cepInput.classList.add("error");
                cepInput.classList.remove("correct");
                cepHelper.classList.add("error");
                cepHelper.classList.remove("correct");
                cepHelper.innerText = "CEP inválido. Digite exatamente 8 números.";
            }

            if (erro) {
                event.preventDefault();
            }
        });
    }
});
