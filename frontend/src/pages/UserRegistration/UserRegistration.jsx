import "./UserRegistration.css";

function UserRegistration() {
   return (
      <div>
         <h1>Cadastro de Usuarios</h1>
         <form method="post" id="user-registration-form">
            <label for="user-registration-name">Nome de Usuário:</label>
            <input type="text" id="user-registration-name" />

            <label for="user-registration-email">Email:</label>
            <input type="email" id="user-registration-email" />

            <label for="user-registration-password">Senha:</label>
            <input type="password" id="user-registration-password" />

            <label for="user-registration-role">Nivel de acesso</label>
            <select name="user-role" id="user-registration-role">
               <option value=" "> </option>
               <option value="admin">Administrador</option>
               <option value="management">Gerente</option>
               <option value="broker">Corretor</option>
            </select>
            <button type="submit" id="user-registration-button">
               cadastrar
            </button>
         </form>
         <dialog>
            <p class="user-registration-sucess">
               Usuario cadastrado com sucesso
            </p>
            <button class="button-ok">Ok</button>
         </dialog>
      </div>
   );
}

export default UserRegistration