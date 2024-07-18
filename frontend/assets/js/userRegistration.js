console.log("carreguei");

setTimeout(() => {
    const form = document.getElementById('user-registration-form'); 
    
    
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
            
        const userName = document.getElementById('user-registration-name').value
        const userPassword = document.getElementById('user-registration-password').value
        const userRole = document.getElementById('user-registration-role').value
            
        const data = { userName, userPassword, userRole}
        
        try {
            const response = await fetch('http://192.168.0.202:3000/register',{
                method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
            })
            
            if (response.status) {
                const result = await response.json();
                console.log('Sucesso:', result);
            } else {
                console.error('Erro:', response.statusText);
            }

        } catch (error) {
            console.error("Erro",error)
        }        
    })
        
  
}, 1000)