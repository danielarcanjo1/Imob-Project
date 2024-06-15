
const selectOptionSearch = document.querySelector('.lead-search')

const allSelect = document.querySelectorAll(`.lead-dates, .lead-stage, 
    .lead-builder, .lead-name, .lead-origin, .lead-qualifier, .lead-situation, 
    .lead-builder, .lead-develoment, .lead-property, .lead-heat, .lead-brokers, .lead-development`)
       
    selectOptionSearch.addEventListener("change", (event) =>{
        
        allSelect.forEach( div =>{
            div.classList.add('display-none')
        })

        switch(event.target.value){
        case 'period':{
            document.querySelector('.lead-dates').classList.remove('display-none')
            console.log("Period")             
        }break
        case 'stage':{
            document.querySelector('.lead-stage').classList.remove('display-none')
            console.log("Status")
        }break
        case 'builder':{
            document.querySelector('.lead-builder').classList.remove('display-none')
            console.log("Construtora")
        }break
        case 'client-name':{
            document.querySelector('.lead-name').classList.remove('display-none')
            console.log("Nome do cliente")
        }break
        case 'source':{
            document.querySelector('.lead-origin').classList.remove('display-none')
            console.log("Origem")
        }break
        case 'qualifier':{
            document.querySelector('.lead-qualifier').classList.remove('display-none')
            console.log("Qualificador")
        }break
        case 'broker':{
            document.querySelector('.lead-brokers').classList.remove('display-none')
            console.log("Corretor")
        }break
        case 'status':{
            document.querySelector('.lead-situation').classList.remove('display-none')
            console.log("status")
        }break
        case 'development':{
            document.querySelector('.lead-development').classList.remove('display-none')
            console.log("Empreendimento")
        }break
        case 'property':{
            document.querySelector('.lead-property').classList.remove('display-none')
            console.log("imovel")
        }break
        case 'heat':{
            document.querySelector('.lead-heat').classList.remove('display-none')
            console.log("calor")
        }break
      
    }
})







      
    


