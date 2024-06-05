const divs = document.querySelectorAll(".leads, .scale, .reports");
const leadContent = document.querySelector(".leads-content");
const scaleContent = document.querySelector(".scale-content");
const reportsContent = document.querySelector(".reports-content");
const iconMajorLeads = document.querySelector('.icon-major-leads')
const iconMajorScale = document.querySelector(".icon-major-scale")
const iconMajorReports = document.querySelector(".icon-major-reports")

divs.forEach(accordion => {
    accordion.addEventListener("click", () => {
       
        if (accordion.classList.contains("leads") ) {
        
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
            leadContent.style.height = "250px"
        }

        if (accordion.classList.contains("reports")) {
            
            if(scaleContent.classList.contains("scale-content-visible")) 
            {
                scaleContent.classList.remove("scale-content-visible")
                iconMajorScale.classList.toggle("fa-rotate-90")
            }
                
            if(leadContent.classList.contains("leads-content-visible")) 
            {
                leadContent.classList.remove("leads-content-visible")
                iconMajorLeads.classList.toggle("fa-rotate-90")
            }
            
            reportsContent.classList.toggle("reports-content-visible")
            iconMajorReports.classList.toggle("fa-rotate-90")
            reportsContent.style.height = "100px"
        }

        if (accordion.classList.contains("scale")) {
            
            if(leadContent.classList.contains("leads-content-visible")) 
            {
                leadContent.classList.remove("leads-content-visible")
                iconMajorLeads.classList.toggle("fa-rotate-90")
            }
                
            if(reportsContent.classList.contains("reports-content-visible")) 
            {
                reportsContent.classList.remove("reports-content-visible")
                 iconMajorReports.classList.toggle("fa-rotate-90")
            }

            scaleContent.classList.toggle("scale-content-visible")
            iconMajorScale.classList.toggle("fa-rotate-90")
            scaleContent.style.height = "220px"
        }
    });
});