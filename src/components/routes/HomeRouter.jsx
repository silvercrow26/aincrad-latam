import React, { useEffect } from "react";
import { Route, Routes, useNavigate, BrowserRouter as Router, useParams } from "react-router-dom";
import { useAuth } from "../../firebase/context/AuthContext";
import { Navbar } from "../Navbar";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { Perfil } from "../pages/Perfil";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { VelorenForm } from "../pages/veloren/VelorenForm";
import { SubNavBar } from "../SubNavBar";
import { Staff } from "../pages/Staff";
import { Footer } from "../Footer";
import { ContactoPage } from "../pages/ContactoPage";
import { FAQPage } from "../pages/FAQPage";
import { AdministrationPage } from "../pages/AdministrationPage";
import { CreatePublication } from "../pages/CreatePublication";
import { CreateGameEvents } from "../pages/CreateGameEvents";
import { PublicationPage } from "../pages/PublicationPage";
import { useDocuments } from "../hooks/useDocuments";


export const HomeRouter = () => {

  return (
    <>

      <SubNavBar />
      <Navbar />
      {/* Rutas publicas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/publicacion/:id" element={<PublicationPage />} />
        <Route path="/paneladmin" element={<LoginPage />} />
        <Route path="/staff" element={<Staff />} />
        <Route path="/contacto" element={<ContactoPage />} />
        <Route path="/FAQ" element={<FAQPage />} />
        {/* <Route path="/register" element={<RegisterPage />} /> */}

        {/* Rutas protegidas */}  
        <Route element={<PrivateRouter />}>
        <Route path="/section/configuracion/perfil/:id" exact element={<Perfil />} />
        <Route path="/section/configuracion/panel" exact element={<AdministrationPage />} />
        <Route path="/section/configuracion/panel/publicaciones" exact element={<CreatePublication />} />
        <Route path="/section/configuracion/panel/eventos" exact element={<CreateGameEvents />} />
        
        </Route>

      </Routes>
      <Footer />

    </>
  );
};
