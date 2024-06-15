setTimeout(() =>{

    const divs = document.querySelectorAll(".leads, .scale, .reports, .broker, .properties");
        
    const contents = {
        leads: document.querySelector(".leads-content"),
        scale: document.querySelector(".scale-content"),
        reports: document.querySelector(".reports-content"),
        broker: document.querySelector(".broker-content"),
        properties: document.querySelector(".properties-content")
        };

    const icons = {
        leads: document.querySelector(".icon-major-leads"),
        scale: document.querySelector(".icon-major-scale"),
        reports: document.querySelector(".icon-major-reports"),
        broker: document.querySelector(".icon-major-broker"),
        properties: document.querySelector(".icon-major-properties")
        };
        
    function toggleVisibility(type) {
        for (let key in contents) {
            if (key === type) {
            const content = contents[key];
            const icon = icons[key];
            const isVisible = content.classList.toggle(`${key}-content-visible`);
                icon.classList.toggle("fa-rotate-90", isVisible);
            } else {
            const content = contents[key];
                const icon = icons[key];
                content.classList.remove(`${key}-content-visible`);
                icon.classList.remove("fa-rotate-90");
            }
        }
    }
        
    divs.forEach(accordion => {
        accordion.addEventListener("click", () => {
            const type = Array.from(accordion.classList).find(cls => contents[cls]);
            toggleVisibility(type);
        });
    });

},1000)

