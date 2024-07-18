import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ContentCenter from "./components/ContentCenter/ContentCenter";
import NavBar from "./components/navbar/NavBar";
import TopMenu from "./components/topMenu/TopMenu";
import AppRoutes from "./routes/AppRoutes";
import Login from "./pages/Login/Login";

function App() {
   
   const [isAuthenticated, setIsAuthenticated] = useState(false);

   const authenticateUser = (username, password) => {
      if (username === "danielarcanjo1" && password === "123456") {
         setIsAuthenticated(true);
      } else {
         alert("Credenciais inválidas");
      }
   };

   return (
      <Router>
         <div className="App">
            {isAuthenticated ? (
               <>
                  <TopMenu />
                  <NavBar />
                  <ContentCenter>
                     <AppRoutes />
                  </ContentCenter>
               </>
            ) : (
               <Routes>
                  <Route path="/" element={<Login authenticateUser={authenticateUser} />} />
                  <Route path="/*" element={<Navigate to="/" />} />
               </Routes>
            )}
         </div>
      </Router>
   );
}

export default App;
