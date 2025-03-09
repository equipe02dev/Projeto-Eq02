document.addEventListener("DOMContentLoaded", function () {
    let emailInput = document.getElementById("email");
    let emailLabel = document.querySelector('label[for="email"]')
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
