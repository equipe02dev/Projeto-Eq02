document.addEventListener("DOMContentLoaded", function () {
    // Seleciona todos os controles de quantidade
    const controlesQuantidade = document.querySelectorAll(".controle-quantidade");

    controlesQuantidade.forEach((controle) => {
        // Seleciona os elementos dentro de cada controle
        const btnSubtrair = controle.querySelector(".btn-subtrair");
        const btnAdicionar = controle.querySelector(".btn-adicionar");
        const quantidadeInput = controle.querySelector(".quantidade");
        const descriptionInput = controle.querySelector(".description");

        // Função para decrementar a quantidade
        btnSubtrair.addEventListener("click", function () {
            let quantidadeAtual = parseInt(quantidadeInput.value);
            if (quantidadeAtual > parseInt(quantidadeInput.min)) {
                quantidadeAtual--;
                quantidadeInput.value = quantidadeAtual;
            }
        });

        // Função para incrementar a quantidade
        btnAdicionar.addEventListener("click", function () {
            let quantidadeAtual = parseInt(quantidadeInput.value);
            quantidadeAtual++;
            quantidadeInput.value = quantidadeAtual;
        });

        // Função para capturar a descrição (opcional)
        descriptionInput.addEventListener("input", function () {
            console.log("Descrição atualizada:", descriptionInput.value);
        });
    });
});
