document.addEventListener("DOMContentLoaded", function () {
    const serviceItems = document.querySelectorAll(".service1");

    serviceItems.forEach(item => {
        item.addEventListener("mouseenter", function () {
            this.style.transform = "scale(1.1)";
            this.style.transition = "transform 0.3s ease, box-shadow 0.3s ease";
            this.style.boxShadow = "0px 5px 15px rgba(0, 0, 0, 0.3)";
        });

        item.addEventListener("mouseleave", function () {
            this.style.transform = "scale(1)";
            this.style.boxShadow = "none";
        });
    });
});
