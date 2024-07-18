

function LeadRegistration() {
   return (
     <div>
        <h1>Cadastro de Leads</h1>
        
        <form className="form-register-lead">
            <div className="content-form-lead">
                <fieldset>
                    
                    <legend><i className="fa fa-user" aria-hidden="true"></i>DADOS DO CLIENTE</legend>
                    <div>
                        <label for="name">Nome:</label>
                        <input className ="input-lead-name" type="text" name="name" id="lead-name" required/>
                    </div>
                    <div>
                        <label for="name">Telefone:</label>
                        <input className="input-lead-phone" type="tel" name="phone" id="lead-phone" required/>
                    </div>
                    <div>
                        <label for="name">Email:</label>
                        <input className ="input-lead-email" type="email" name="email" id="lead-email" required/>
                    </div>
                </fieldset>
                
                <fieldset>
                    <legend><i className="fa fa-search" aria-hidden="true"></i>ORIGEM DO LEAD</legend>
                    <div>
                        <label for="Date">Data da captura</label>
                        <input className="input-lead-capture-date" type="date" name="date" id="date"/>
                    </div>
                    <div>
                        <label for="name">Origem</label>
                        <select className="select-lead" name="select">
                            <option value="1">Não definido</option>
                            <option value="2">Loja</option>
                            <option value="3">Indicação</option>
                            <option value="4">Plantão</option>
                            <option value="5">Facebook</option>
                            <option value="6">Instagram</option>
                            <option value="7">Site</option>
                            <option value="8">Feirão</option>
                        </select>
                    </div>
                    
                </fieldset>

                <fieldset>
                    <legend><i className="fa fa-cart-plus" aria-hidden="true"></i>INTERESSE INICIAL</legend>
                    <div>
                        <label for="">Produto</label>
                        <select className="select-lead" name="" id="">
                            <option value="1">Empreendimento</option>
                            <option value="1">Imóvel</option>
                        </select>
                    </div>

                    <div>
                        <label for="">Empreendimento</label>
                        <select className="select-lead" name="" id="">
                            <option value="1">Empreendimento</option>
                            <option value="1">Não definido</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                        </select>
                    </div>

                    <div>
                        <label for="">Situação</label>
                        <select className="select-lead" name="" id="">
                            <option value="1">Novo lead</option>
                            <option value="1">Em atendimento</option>
                            <option value="1">Correspondente</option>
                            <option value="1">Aprovado</option>
                            <option value="1">Condicionado</option>
                            <option value="1">Com pendências</option>
                            <option value="1">Reprovado</option>
                            <option value="1">Gerar Contrato</option>
                            <option value="1">Assinar contrato e formulários</option>
                            <option value="1">Vendido</option>
                            <option value="1">Sem interação</option>
                            <option value="1">Desistiu</option>
                        </select>
                    </div>
                </fieldset>

                <fieldset>
                    <legend><i className="fa fa-users" aria-hidden="true"></i>ATENDENDO O LEAD</legend>
                    <div>
                        <label for="">Qualificador</label>
                        <select className="select-lead" name="" id="">
                            <option value="1">Novo lead</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                    <div>
                        <label for="">Corretor</label>
                        <select className="select-lead" name="" id="">
                            <option value="1">Novo lead</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                            <option value="1">1</option>
                        </select>
                    </div>
                <button id="button-register" type="submit">Cadastrar</button>
                    
                </fieldset>
            </div>
        </form>
     </div>
        

      
   );
}

export default LeadRegistration;
