document.addEventListener("DOMContentLoaded", function () {
    const dates = document.querySelectorAll(".date");

    dates.forEach(date => {
        date.addEventListener("click", function () {
            // Remove a classe .selected de todos os dias
            dates.forEach(d => d.classList.remove("selected"));

            // Adiciona a classe .selected ao dia clicado
            date.classList.add("selected");
        });
    });
});