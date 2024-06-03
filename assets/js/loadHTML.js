
document.addEventListener("DOMContentLoaded", () =>{
    document.querySelector(".register").addEventListener("click", () =>{
        console.log("CLICOU")
        const path = "../html/register-lead.html"
        
        fetch(path)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            return response.text();
        })
        .then(data => {
            document.querySelector(".page-content-center").innerHTML = data;
        })
        .catch(error => {
            console.error('Erro ao carregar o formulário:', error);
        });
    })
})