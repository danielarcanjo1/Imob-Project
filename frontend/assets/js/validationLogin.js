
const form = document.getElementById("login-form");

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    const testUserName = "danielarcanjo1@gmail.com"
    const testPassword = "a1s2d3f4"
    const userName = document.getElementById("username").value
    const userPassword = document.getElementById("password").value

    if(userName === testUserName && userPassword === testPassword){
        window.location.href = "./html/main-imob.html"
        const sessionName = document.querySelector("session-name")
        sessionName.innerText = userName
    }else{
        const errorMessage = document.querySelector(".error-message")
        errorMessage.textContent = "Usuario e ou senha invalidos"
        errorMessage.style.display = 'block'
    }
    
})

document.getElementById('username').addEventListener('input', () => {
    document.querySelector('.error-message').textContent = ''; 
    document.querySelector('.error-message').style.display = 'none';
     
});
  
  document.getElementById('password').addEventListener('input', () => {
    document.querySelector('.error-message').textContent = ''; 
    document.querySelector('.error-message').style.display = 'none'; 
});