
const form = document.getElementById("login-form");

form.addEventListener("submit", async(event) =>{
    event.preventDefault();
    
    const userName = document.getElementById("username").value
    const userPassword = document.getElementById("password").value
    const data = { userName, userPassword } 
    
    try {
        const response = await fetch('http://192.168.0.202:3000/login',{
            method: 'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(data)
        })
        if (response.status === 200 ) {
            const result = await response.json();
            window.location.href = "./html/main-imob.html"
        } else {
            
            
            const errorMessage = document.querySelector(".error-message")
            errorMessage.textContent = "Usuario e ou senha invalidos"
            errorMessage.style.display = 'block'
            
            document.getElementById('username').addEventListener('input', () => {
            document.querySelector('.error-message').textContent = ''; 
            document.querySelector('.error-message').style.display = 'none';
                
            });
            
            document.getElementById('password').addEventListener('input', () => {
            document.querySelector('.error-message').textContent = ''; 
            document.querySelector('.error-message').style.display = 'none'; 
            });
                    }

    }catch (error) {
        console.error("Erro",error)
    }        
   

})        
       


