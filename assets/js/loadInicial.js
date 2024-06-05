document.addEventListener("DOMContentLoaded", async() =>{
        const path1 = "../html/dashboard.html"
        try {
            const response = await fetch(path1)
            const data = await response.text()
            document.querySelector(".page-content-center").innerHTML = data     
        } catch (error) {
            console.error('NÃO FOI POSSIVEL',error)
        }
})

// document.addEventListener('DOMContentLoaded', async () => {
//     async function loadContent(url, elementSelector) {
//         const element = document.querySelector(elementSelector);
//         element.innerHTML = '<p>Carregando...</p>';

//         try {
//             const response = await fetch(url);
//             if (!response.ok) {
//                 throw new Error(`Erro ao carregar ${url}: ${response.statusText}`);
//             }
//             const html = await response.text();
//             element.innerHTML = html;
//         } catch (error) {
//             element.innerHTML = `<p>Ocorreu um erro ao carregar o conteúdo: ${error.message}</p>`;
//         }
//     }

//     // Carregar múltiplos conteúdos ao mesmo tempo
//     const urlsAndSelectors = [
//         { url: './html/top-menu.html', selector: '.top-menu' },
//         { url: './html/navbar.html', selector: '.navbar-right' },
//         { url: './html/dashboard.html', selector: '.page-content-center' }
//     ];

//     const fetchPromises = urlsAndSelectors.map(item => loadContent(item.url, item.selector));
//     await Promise.all(fetchPromises);
// });