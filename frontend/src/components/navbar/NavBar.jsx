import "./NavBar.css";
import { FcDoughnutChart } from "react-icons/fc";
import { FaUsers } from "react-icons/fa6";
import { IoIosArrowForward } from "react-icons/io";
import { FaUserTie } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { FaCalendarAlt } from "react-icons/fa";
import { TbReportSearch } from "react-icons/tb";
import { LuFileSearch } from "react-icons/lu";
import { FaUserPlus } from "react-icons/fa6";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom";
import React, { useState } from "react";


function NavBar() {

   const [visibleContent, setVisibleContent] = useState("");

   const toggleVisibility = (type) => {
      setVisibleContent((prev) => (prev === type ? "" : type));
   };

   const isVisible = (type) => visibleContent === type;

   return (
      <div className="navBar">
         <div className="navbarTitle">
            <span>CRM DE VENDAS</span>
         </div>
         <div className="navbarContent">
            <div className="navbarItem Dashboard">
               <FcDoughnutChart />
               <Link to="/dashboard">DASHBOARD</Link>
            </div>
            <div
               className="navbarItem leads"
               onClick={() => toggleVisibility("leads")}
            >
               <div className="leads-icon">
                  <FaUsers
                     className={`icon-major-leads ${
                        isVisible("leads") ? "fa-rotate-90" : ""
                     }`}
                  />
                  <span className="span-leads">LEADS</span>
               </div>
               <IoIosArrowForward />
            </div>
            <div
               className={`leads-content ${
                  isVisible("leads") ? "leads-content-visible" : ""
               }`}
            >
               <Link to="/cadastrar-lead">Cadastrar lead</Link>
               <Link to="/buscar-lead">Buscar lead</Link>
            </div>
            <div
               className="navbarItem broker"
               onClick={() => toggleVisibility("broker")}
            >
               <div className="broker-icon">
                  <FaUserTie
                     className={`icon-major-broker ${
                        isVisible("broker") ? "fa-rotate-90" : ""
                     }`}
                  />
                  <span className="span">CORRETOR</span>
               </div>
               <IoIosArrowForward />
            </div>
            <div
               className={`broker-content ${
                  isVisible("broker") ? "broker-content-visible" : ""
               }`}
            >
               <Link to="/cadastrar-corretor">Cadastrar Corretor</Link>
               <Link to="/buscar-corretor">Buscar Corretor</Link>
            </div>
            <div
               className="navbarItem properties"
               onClick={() => toggleVisibility("properties")}
            >
               <div className="properties-icon">
                  <FaBuilding
                     className={`icon-major-properties ${
                        isVisible("properties") ? "fa-rotate-90" : ""
                     }`}
                  />
                  <span className="span">IMOVEIS</span>
               </div>
               <IoIosArrowForward />
            </div>
            <div
               className={`properties-content ${
                  isVisible("properties") ? "properties-content-visible" : ""
               }`}
            >
               <Link to="/cadastrar-imovel">Cadastrar Imovel</Link>
               <Link to="/buscar-imovel">Buscar Imovel</Link>
            </div>
            <div
               className="navbarItem scale"
               onClick={() => toggleVisibility("scale")}
            >
               <div className="scales-icon">
                  <FaCalendarAlt
                     className={`icon-major-scale ${
                        isVisible("scale") ? "fa-rotate-90" : ""
                     }`}
                  />
                  <span>ESCALAS DE PLANTÕES</span>
               </div>
               <IoIosArrowForward />
            </div>
            <div
               className={`scale-content ${
                  isVisible("scale") ? "scale-content-visible" : ""
               }`}
            >
               <Link to="/locais">Locais</Link>
               <Link to="/plantoes">Plantões</Link>
               <Link to="/ver-no-calendario">Ver no calendário</Link>
            </div>
            <div
               className="navbarItem reports"
               onClick={() => toggleVisibility("reports")}
            >
               <div className="reports-icon">
                  <TbReportSearch
                     className={`icon-major-reports ${
                        isVisible("reports") ? "fa-rotate-90" : ""
                     }`}
                  />
                  <span>RELATÓRIOS</span>
               </div>
               <IoIosArrowForward />
            </div>
            <div
               className={`reports-content ${
                  isVisible("reports") ? "reports-content-visible" : ""
               }`}
            >
               <Link to="/distribuicao-de-leads">Distribuição de leads</Link>
               <Link to="/relatorio-de-vendas">Relatório de Vendas</Link>
            </div>
            <div className="navbarItem audit">
               <LuFileSearch />
               <Link to="/auditoria">AUDITORIA</Link>
            </div>
            <div className="navbarItem user-registration">
               <FaUserPlus />
               <Link to="/cadastrar-usuario">CADASTRAR USUÁRIO</Link>
            </div>
            <div className="navbarItem logout" >
               
               <IoIosLogOut />
               <Link to="/sair">SAIR</Link>
            </div>
         </div>
      </div>
   );
}

export default NavBar;
