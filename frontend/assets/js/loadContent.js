async function loadContent(url,callback,scriptSrc){
    try {
        const response  = await fetch(url)
        const data = await response.text()
        document.querySelector(".page-content-center").innerHTML = data
        if(callback){
            loadScript(scriptSrc)
        }
    } catch (error) {
        console.error("Não foi possivel carregar conteudo da pagina", error)
    }
}

