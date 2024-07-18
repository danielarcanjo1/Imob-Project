import { useState } from 'react'
import "./Login.css";
import LogoCunha from "../../assets/images/logo-cunha.jpg"
import { CiUser } from "react-icons/ci";
import { IoLockOpenOutline } from "react-icons/io5";
import { IoLockClosedOutline } from "react-icons/io5";



function Login( {authenticateUser }) {
   
   const[username, setUsername] = useState("")
   const[password, SetPassword] = useState("")

   const hadleLogin = (e) =>{
      e.preventDefault();
      authenticateUser(username,password)
   }

   return (
      <div className="page">
         <div className="container">
            <img
               src={LogoCunha}
               alt=""
               className="logo-cunha"
            />
            <form id="login-form" onSubmit={hadleLogin}>
               <div className="login-input-name">
                  <input
                     className="sucess"
                     type="text"
                     id="username"
                     value={username}
                     onChange={(e) => setUsername(e.target.value)}
                     placeholder="Nome de Usuario"
                     
                  />
                <CiUser />
               </div>
               <div className="login-input-password">
                  <input
                     type="password"
                     id="password"
                     placeholder="Senha"
                     value={password}
                     onChange={(e) => SetPassword(e.target.value)}
                  />
                  <IoLockClosedOutline />

               </div>
               <p className="error-message"></p>

               <button className="submit-login-button" type="submit">
                  
               <IoLockOpenOutline />
               Entrar
               </button>
            </form>
         </div>
      </div>
   );
}

export default Login;
