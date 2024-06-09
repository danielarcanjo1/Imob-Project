
setTimeout(() =>{
    const menuModules = document.querySelector(".modules-menu")
    const moduleId = document.querySelector(".modules-id")
    const menuMoulesContent = document.querySelector(".modules-menu-content")
    
    menuModules.addEventListener("click", () =>{
        menuMoulesContent.classList.toggle("modules-menu-content-visible") 
    })
    menuModules.addEventListener("mouseleave", () => {
        setTimeout(() =>{
            menuMoulesContent.classList.add("modules-menu-content-visible")
        },3000)
    })

},1000)
