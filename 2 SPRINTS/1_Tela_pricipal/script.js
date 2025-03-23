document.addEventListener("DOMContentLoaded", function () {
    // Adicionar interatividade aos itens de serviço
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

   // Função para alternar a visibilidade dos textos
            document.querySelectorAll('.toggle-text').forEach(item => {
                item.addEventListener('click', () => {
                    const content = item.nextElementSibling;
                    content.classList.toggle('show');
                });
            });
            
            // Suavizar rolagem da página
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    document.querySelector(this.getAttribute('href')).scrollIntoView({
                        behavior: 'smooth'
                    });
                });
            });
// Seleciona a imagem pela classe
const imagem = document.querySelector('.testeimag2');

// Aplica estilos dinâmicos (sem borda)
imagem.style.padding = '10px'; // Espaçamento interno
imagem.style.backgroundColor = '#f9f9f9'; // Cor de fundo
imagem.style.transition = 'transform 0.3s ease'; // Transição suave

// Adiciona um efeito de hover com JavaScript
imagem.addEventListener('mouseenter', () => {
    imagem.style.transform = 'scale(1.2)'; // Aumenta o tamanho da imagem
    
});

imagem.addEventListener('mouseleave', () => {
    imagem.style.transform = 'scale(1)'; // Volta ao tamanho original
    
});
