function loadScript(src) {
    const script = document.createElement('script');
    script.src = src; 
    script.onload = function() {
        console.log('Script carregado com sucesso!');
    };
    script.onerror = function() {
        console.error('Erro ao carregar o script.');
    };
    const container = document.querySelector('.page-content-center');
    container.appendChild(script);
}