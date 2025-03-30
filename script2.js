function loadPage(page) {
    fetch(/${page}/index.html)
        .then(response => response.text())
        .then(html => {
            document.getElementById('content').innerHTML = html;
        })
        .catch(error => console.error('Erro ao carregar a página:', error));
}