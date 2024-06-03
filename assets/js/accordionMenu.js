
const divs = document.querySelectorAll(".leads, .scale, .reports");

// Adiciona o evento de clique a cada div
divs.forEach(accordion => {
    accordion.addEventListener("click", (event) => {
        const target = event.target;
        console.log(target);

        if (accordion.classList.contains("leads")) {
            const leadContent = document.querySelector(".leads-content");
            const scaleContent = document.querySelector(".scale-content");
            const reportsContent = document.querySelector(".reports-content");
            const iconMajorLeads = document.querySelector('.icon-major-leads')
            const iconMajorScale = document.querySelector(".icon-major-scale")
            const iconMajorReports = document.querySelector(".icon-major-reports")
        
            if(scaleContent.classList.contains("scale-content-visible")) 
            {
                scaleContent.classList.remove("scale-content-visible")
                iconMajorScale.classList.toggle("fa-rotate-90")
            }
            
            if(reportsContent.classList.contains("reports-content-visible")) 
            {
                    reportsContent.classList.remove("reports-content-visible")
                    iconMajorReports.classList.toggle("fa-rotate-90")
            }
            
            leadContent.classList.toggle("leads-content-visible");
            iconMajorLeads.classList.toggle("fa-rotate-90")

        }
        if (accordion.classList.contains("reports")) {
            const leadContent = document.querySelector(".reports-content");
            const icon = document.querySelector('.icon-major-reports')
            leadContent.classList.toggle("reports-content-visible");
            icon.classList.toggle("fa-rotate-90")
        }
        if (accordion.classList.contains("scale")) {
            const leadContent = document.querySelector(".scale-content");
            const icon = document.querySelector('.icon-major-scale')
            leadContent.classList.toggle("scale-content-visible");
            icon.classList.toggle("fa-rotate-90")
        }
    });
});