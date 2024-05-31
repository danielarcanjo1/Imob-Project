const menuModules = document.querySelector(".modules-menu")

menuModules.addEventListener("click", () =>{
    const menuMoulesContent = document.querySelector(".modules-menu-content")
    menuMoulesContent.classList.toggle("modules-menu-content-visible")
})