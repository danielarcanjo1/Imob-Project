const form = document.getElementById("login-form");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const testUserName = "danielarcanjo1@gmail.com"
    const testPassword = "a1s2d3f4"
    const userName = document.getElementById("username").value
    const userPassword = document.getElementById("password").value

    if(userName === testUserName && userPassword === testPassword){
        window.location.href = "main-imob.html"
    }else{
        const errorMessage = document.getElementById("error-message")
        errorMessage.textContent = "Usuario e ou senha invalidos"
        errorMessage.style.display = 'block'
    }
    
})

document.getElementById('username').addEventListener('input', () => {
    document.getElementById('error-message').textContent = ''; 
    document.getElementById('error-message').style.display = 'none';
     
});
  
  document.getElementById('password').addEventListener('input', () => {
    document.getElementById('error-message').textContent = ''; 
    document.getElementById('error-message').style.display = 'none'; 
});