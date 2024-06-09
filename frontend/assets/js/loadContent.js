async function loadContent(url){
    try {
        const response  = await fetch(url)
        const data = await response.text()
        document.querySelector(".page-content-center").innerHTML = data
    } catch (error) {
        console.error("Não foi possivel carregar conteudo da pagina", error)
    }
}

