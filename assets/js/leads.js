// const leads = document.querySelector(".leads")

let count = 0;

// leads.addEventListener("click", (event) =>{
//     event.preventDefault()
//     const leadsContent = document.querySelector(".leads-content")    
//     const arrow = document.querySelector(".fa-arrow-right")
//     leadsContent.classList.toggle("leads-content-visible")
//     arrow.classList.add("fa-rotate-90")
    
//     count++
   
//     if(count % 2 === 0){
//         arrow.classList.remove("fa-rotate-90")
//     }
   
// })

// function accordion(){
//     document.addEventListener("click", () =>{
        
//         const target = event.target
//         const leadsContent = document.querySelector(".leads-content")    
//         const arrow = document.querySelector(".fa-arrow-right")

//         console.log(target)
//         if(target.matches(".leads") || target.matches(".arrow-right-leads") || target.matches(".leads-icon") || target.matches(".span-leads") || target.matches(".fa-users")){
//             leadsContent.classList.toggle("leads-content-visible")
//             arrow.classList.add("fa-rotate-90")
            
//             count++
        
//             if(count % 2 === 0){
//                 arrow.classList.remove("fa-rotate-90")
//             }
//         }
        
    
//     })

// }
// accordion()

function accordion() {
    
    document.addEventListener("click", (event) => {
        const target = event.target;
        const leadsContent = document.querySelector(".leads-content");
        const arrow = document.querySelector(".fa-arrow-right");

        if (target.matches(".leads") || 
            target.matches(".arrow-right-leads") || 
            target.matches(".leads-icon") || 
            target.matches(".span-leads") || 
            target.matches(".fa-users")) {
            
            leadsContent.classList.toggle("leads-content-visible");
            arrow.classList.toggle("fa-rotate-90");   
        }
    });
}

accordion();

// function accordion(containerClass, contentClass, iconClass) {
//     document.addEventListener("click", (event) => {
//         const target = event.target;
//         const container = target.closest(containerClass); 
//         if (container) {
//             const content = container.querySelector(contentClass);
//             const icon = container.querySelector(iconClass);

//             if (content && icon) {
//                 content.classList.toggle("content-visible");
//                 icon.classList.toggle("icon-rotate-90");
//             }
//         }
//     });
// }