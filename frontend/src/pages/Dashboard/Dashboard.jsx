import './Dashboard.css'
function Dashboard() {
   return (
      <>
         <h1 className='dashboardH1'>DASHBOARD</h1>
         <div className="dashboard-container">
            <div className="leads-content-wrapper">
               <div className="active-leads">
                  <div className="border-bottom"></div>
                  <div className="border-bottom"></div>
                  <h3>LEADS ATIVOS</h3>
                  <div className="cards">
                     <div className="card">
                        <div className="card-informations">
                           <span>0</span>
                           <span>NOVOS</span>
                        </div>
                        <div className="card-icon">
                           <i className="fa fa-users fa-2x" aria-hidden="true"></i>
                        </div>
                     </div>
                     <div className="card">
                        <div className="card-informations">
                           <span>0</span>
                           <span>COM QUALIFICADOR</span>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-person-check"></i>
                        </div>
                     </div>
                     <div className="card">
                        <div className="card-informations">
                           <span>0</span>
                           <span>COM CORRETOR</span>
                        </div>
                        <div className="card-icon">
                           <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                        </div>
                     </div>
                     <div className="card">
                        <div className="card-informations">
                           <span>0</span>
                           <span>TOTAL ATIVO</span>
                        </div>
                        <div className="card-icon">
                           <i className="fa fa-user fa-2x" aria-hidden="true"></i>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="tasks">
                  <h3>TAREFAS</h3>
                  <div className="cards">
                     <div className="card bottom-red">
                        <div className="card-informations">
                           <span>0</span>
                           <span>SEM TAREFAS</span>
                        </div>
                        <div className="card-icon">
                           <i
                              className="fa fa-exclamation-triangle fa-2x"
                              aria-hidden="true"
                           ></i>
                        </div>
                     </div>
                     <div className="card bottom-red">
                        <div className="card-informations">
                           <span>0</span>
                           <span>ATRASADAS</span>
                        </div>
                        <div className="card-icon">
                           <i
                              className="fa fa-calendar-times-o fa-2x"
                              aria-hidden="true"
                           ></i>
                        </div>
                     </div>
                     <div className="card">
                        <div className="card-informations">
                           <span>0</span>
                           <span>PARA HOJE</span>
                        </div>
                        <div className="card-icon">
                           <i
                              className="fa fa-calendar fa-2x"
                              aria-hidden="true"
                           ></i>
                        </div>
                     </div>
                     <div className="card">
                        <div className="card-informations">
                           <span>0</span>
                           <span>FUTURAS</span>
                        </div>
                        <div className="card-icon">
                           <i
                              className="fa fa-calendar fa-2x"
                              aria-hidden="true"
                           ></i>
                        </div>
                     </div>
                  </div>
                  <div className="border-bottom"></div>
                  <div className="border-bottom"></div>
               </div>

               <div className="salles-funnel">
                  <h3>FUNIL DE VENDAS</h3>
                  <div className="row1">
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>212</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>34</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                  </div>
                  <div className="row2">
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                  </div>
                  <div className="row3">
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                     <div className="card-funnel">
                        <div className="card-informations">
                           <div>
                              <span>0</span>
                              <p>NOVO LEAD</p>
                           </div>
                           <div className="squares">
                              <div className="square-red">200</div>
                              <div className="square-yellow">3</div>
                              <div className="square-green">1</div>
                           </div>
                        </div>
                        <div className="card-icon">
                           <i className="bi bi-funnel"></i>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <div className="leads-company">
               <div className="title">
                  <div className="card-icon">
                     <i className="fa fa-users" aria-hidden="true"></i>
                  </div>
                  <h3>LEADS POR CONSTUTORAS</h3>
               </div>
               <div className="card-company">
                  <span>Engenharq</span>
                  <div className="number-leads">1112</div>
               </div>
               <div className="card-company">
                  <span>MRV</span>
                  <div className="number-leads">1</div>
               </div>
               <div className="card-company">
                  <span>Telesil</span>
                  <div className="number-leads">1</div>
               </div>
               <div className="card-company">
                  <span>Moura dubeaux</span>
                  <div className="number-leads">1</div>
               </div>
               <div className="card-company">
                  <span>Cunha Construtora</span>
                  <div className="number-leads">1</div>
               </div>
               <div className="card-company">
                  <span>Sensia</span>
                  <div className="number-leads">1</div>
               </div>
               <div className="card-company">
                  <span>Rocha</span>
                  <div className="number-leads">1</div>
               </div>
               <div className="card-company">
                  <span>Engenharq</span>
                  <div className="number-leads">1</div>
               </div>
               <div className="legend">
                  <div className="squares">
                     <div>
                        <div className="square-red"></div>
                        <p>Sem Tarefas</p>
                     </div>
                     <div>
                        <div className="square-yellow"></div>
                        <p>Tarefas atrasadas</p>
                     </div>
                     <div>
                        <div className="square-green"></div>
                        <p>Tarefas agendadas</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
}

export default Dashboard;
