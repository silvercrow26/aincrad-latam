import React, { useEffect } from "react";
import { Route, Routes, useNavigate, BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../../firebase/context/AuthContext";
import { Navbar } from "../Navbar";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { RegisterPage } from "../pages/RegisterPage";
import { VelorenPage } from "../pages/VelorenPage";
import { UnturnedPage } from "../pages/UnturnedPage";
import { Perfil } from "../pages/Perfil";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";
import { VelorenForm } from "../pages/veloren/VelorenForm";

export const HomeRouter = () => {
  const { user } = useAuth();
  return (
    <>


      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route element={<PrivateRouter />}>
        {/* <Route path="/section/veloren" exact element={<VelorenPage /> } /> */}
        <Route path="/section/veloren/inscription" exact element={<VelorenForm /> } />
        <Route path="/section/unturned" exact element={<UnturnedPage />} />
        <Route path="/section/configuracion/perfil/:id" exact element={<Perfil />} />
 
        </Route>

      </Routes>

    </>
  );
};
