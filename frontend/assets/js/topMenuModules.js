
setTimeout(() =>{
    const menuModules = document.querySelector(".modules-menu")
    const moduleId = document.querySelector(".modules-id")
    const menuMoulesContent = document.querySelector(".modules-menu-content")
    const onlineBrokers = document.querySelector(".brokers-online-icon")
    const onlineBrokersMoment = document.querySelector('.brokers-online-moment')
    
    menuModules.addEventListener("click", () =>{
        menuMoulesContent.classList.toggle("modules-menu-content-visible") 
    })
    
    onlineBrokers.addEventListener('mouseenter', () =>{
        onlineBrokersMoment.classList.toggle("brokers-online-moment-visible")
    })
    onlineBrokers.addEventListener('mouseleave', () =>{
        onlineBrokersMoment.classList.toggle("brokers-online-moment-visible")
    })
    

},1000)
