document.addEventListener("DOMContentLoaded", () => {
 

   function loadAndInsertContent(url, targetSelector) {
        fetch(url)
            .then(response => response.text())
            .then(html => {
                document.querySelector(targetSelector).innerHTML = html;
            })
            .catch(error => {
                console.error('Ocorreu um erro ao carregar o conteúdo:', error);
            });
    }

    loadAndInsertContent('../assets/../html/top-menu.html', '.top-menu');
    loadAndInsertContent('../assets/../html/navbar.html', '.navbar-right');
    loadAndInsertContent('../assets../../html/dashboard.html', '.page-content-center');
});