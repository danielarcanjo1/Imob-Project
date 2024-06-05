const menuModules = document.querySelector(".modules-menu")
const moduleId = document.querySelector(".module-id")

menuModules.addEventListener("click", () =>{
    const menuMoulesContent = document.querySelector(".modules-menu-content")
    menuMoulesContent.classList.toggle("modules-menu-content-visible")
    moduleId.innerHTML = "CRM"
})