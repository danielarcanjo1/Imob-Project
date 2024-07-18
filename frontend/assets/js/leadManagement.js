(function(){
    const selectOptionSearch = document.querySelector('.lead-search');
    const allSelect = document.querySelectorAll(`.lead-dates, .lead-stage, .lead-builder, .lead-name, 
        .lead-origin,.lead-qualifier, .lead-situation, .lead-builder, .lead-development, .lead-property, 
        .lead-heat, .lead-brokers, .lead-development`);
    
        const optionToClassMap = {
            'period': 'lead-dates',
            'stage': 'lead-stage',
            'builder': 'lead-builder',
            'client-name': 'lead-name',
            'source': 'lead-origin',
            'qualifier': 'lead-qualifier',
            'broker': 'lead-brokers',
            'status': 'lead-situation',
            'development': 'lead-development',
            'property': 'lead-property',
            'heat': 'lead-heat'
        };
        
            selectOptionSearch.addEventListener("change", (event) => {
                allSelect.forEach(div => {
                    div.classList.add('display-none');
                });
                const selectedClass = optionToClassMap[event.target.value];
                if (selectedClass) {
                    const elementToShow = document.querySelector(`.${selectedClass}`);
                    if (elementToShow) {
                        elementToShow.classList.remove('display-none');
                    }
                }
        });
       

})()