async function loadContent(url,targetSelector){
    try {
        const response  = await fetch(url)
        const data = await response.text()
        document.querySelector(`.${targetSelector}`).innerHTML = data
    } catch (error) {
        console.error("Não foi possivel carregar conteudo da pagina", error)
    }
}

