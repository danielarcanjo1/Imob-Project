
setTimeout(() =>{
    const menuModules = document.querySelector(".modules-menu")
    const moduleId = document.querySelector(".modules-id")
    const menuMoulesContent = document.querySelector(".modules-menu-content")
    const onlineBrokers = document.querySelector(".brokers-online-icon")
    const onlineBrokersMoment = document.querySelector('.brokers-online-moment')
    const logoCunha = document.querySelector(".logo-cunha")
    
    logoCunha.addEventListener("click", () =>{
        window.location.href = '../html/main-imob.html'
    })

    menuModules.addEventListener("click", () =>{
        menuMoulesContent.classList.toggle("modules-menu-content-visible") 
    })
},1000)
    
    

    


