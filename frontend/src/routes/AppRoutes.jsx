import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/Dashboard/Dashboard";
import LeadRegistration from "../pages/LeadRegistration/LeadRegistration";
import LeadManagement from "../pages/LeadManagement/LeadManagement";
import BrokerRegistration from "../pages/BrokerRegistration/BrokerRegistration";
import UserRegistration from "../pages/UserRegistration/UserRegistration";
import Audit from "../pages/audit/Audit";
import LogOut from "../components/LogOut/LogOut";


function AppRoutes() {
   return (
      <Routes>
         <Route path="dashboard" element={<Dashboard />} />
         <Route path="cadastrar-lead" element={<LeadRegistration />} />
         <Route path="buscar-lead" element={<LeadManagement />} />
         <Route path="cadastrar-corretor" element={<BrokerRegistration />} />
         <Route path="cadastrar-Usuario" element={<UserRegistration />} />
         <Route path="audit" element={<Audit />} />
         <Route path="sair" element={<LogOut/>}/>
         
      </Routes>
   );
}

export default AppRoutes;