import "./LeadManagement.css";

function LeadManagement() {
   return (
      <>
         <h1 className="h1-leads">Gestão de Leads</h1>
         <div className="lead-search-container">
            <div>
               <label className="label-search" for="lead-search">
                  Buscar por:
               </label>
               <select className="lead-search" name="lead-search" id="lead-search">
                  <option value="null">Escolha uma opção</option>
                  <option value="period">Período</option>
                  <option value="stage">Etapa</option>
                  <option value="client-name">Nome do cliente</option>
                  <option value="source">Origem</option>
                  <option value="qualifier">Qualificador</option>
                  <option value="broker">Corretor</option>
                  <option value="status">Situação</option>
                  <option value="builder">Construtora</option>
                  <option value="development">Empreendimento</option>
                  <option value="property">Imóvel</option>
                  <option value="heat">Calor</option>
               </select>
            </div>

            <div className="option-content">
               <div className="lead-dates display-none">
                  <div className="initial-date">
                     <p>Data inicial</p>
                     <input type="date" />
                  </div>
                  <div className="end-date">
                     <p>Data Final</p>
                     <input type="date" />
                  </div>
               </div>

               <div className="lead-stage display-none">
                  <label for="">Etapa: </label>
                  <select name="" id="">
                     <option value="new-leads">Novos</option>
                     <option value="qualifier-leads">Qualificando</option>
                     <option value="brokers-leads">Com Corretor</option>
                     <option value="All-active-leads">Todos os ativos</option>
                     <option value="sold-leads">Vendidos</option>
                     <option value="lost-leads">Perdidos</option>
                  </select>
               </div>

               <div className="lead-name display-none">
                  <p>Nome do cliente: </p>
                  <input
                     className="lead-name-input"
                     type="text"
                     name="lead-name"
                     id="lead-name"
                     placeholder="Nome do cliente"
                  />
               </div>

               <div className="lead-origin display-none">
                  <label for="">Origem: </label>
                  <select name="" id="">
                     <option value="recomendation">Indicação</option>
                     <option value="duty">Plantões</option>
                     <option value="action">Ação</option>
                     <option value="store">Loja</option>
                     <option value="instagram-cunha">Instagram Cunha</option>
                     <option value="instagram-personal">
                        Instagram pessoal
                     </option>
                     <option value="canal-pro">Canal Pro</option>
                  </select>
               </div>

               <div className="lead-qualifier display-none">
                  <label for="">Qualificador: </label>
                  <select name="" id="">
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                  </select>
               </div>

               <div className="lead-brokers display-none">
                  <label for="">Corretor: </label>
                  <select name="" id="">
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                  </select>
               </div>

               <div className="lead-situation display-none">
                  <label for="">Situação: </label>
                  <select name="" id="">
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                  </select>
               </div>

               <div className="lead-builder display-none">
                  <label for="">Construtora: </label>
                  <select name="" id="">
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                  </select>
               </div>

               <div className="lead-development display-none">
                  <label for="">Empreendimento: </label>
                  <select name="" id="">
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                  </select>
               </div>

               <div className="lead-property display-none">
                  <label for="">Imovel: </label>
                  <select name="" id="">
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                     <option value=""></option>
                  </select>
               </div>

               <div className="lead-heat display-none">
                  <label for="">Calor: </label>
                  <select name="" id="">
                     <option value="cold">Frio</option>
                     <option value="">Morno</option>
                     <option value="hot">Quente</option>
                  </select>
               </div>
            </div>
         </div>
      </>
   );
}

export default LeadManagement