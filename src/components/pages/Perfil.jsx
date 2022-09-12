import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuth } from "../../firebase/context/AuthContext";
export const Perfil = () => {
  const { user, logout} = useAuth();
  const navigate = useNavigate()
  const [aincradLogo, setAincradLogo] = useState('./defendzor.jpg');
  const [currentUser, setCurrentUser] = useState([{}]);
  useEffect(() => {
    setCurrentUser([{ ...user }]);
  }, [user]);


  const handleLogout = async() => {
    await logout()
    navigate('/')
  }

  return (
    <div className="text-light">
    <div className=" mt-5">

      <h2 className="text-center">
        ¡Bienvenido{" "}
        <b className="text-warning">{currentUser && currentUser[0].email}</b>!{" "}
      </h2>
      <div className="d-flex justify-content-center">
        <img
          src={aincradLogo}
          className=" mt-4 mb-5 logoAincradPerfil"
          alt="aincrad latam logo"
          />
      </div>
      <div className="text-center">
        <p>
          Email Verificado:{" "}
          <b
            className={
                currentUser[0].emailVerified === false
                ? "text-danger"
                : "text-success"
            }
            >
            {currentUser && currentUser[0].emailVerified === false
              ? "Falso"
              : "Verdadero"}{" "}
          </b>
        </p>
        <p>
          Creación de la cuenta:{" "}
          <b>
            {currentUser &&
              currentUser[0].metadata &&
              currentUser[0].metadata.creationTime.slice(0, 16)}
          </b>
        </p>
        <p>
          Última vez:{" "}
          <b>
            {currentUser &&
              currentUser[0].metadata &&
              currentUser[0].metadata.lastSignInTime.slice(0, 16)}
          </b>
        </p>
        <button className="w-50 btn btn-danger" onClick={handleLogout}>Cerrar sesión</button>
      </div>
              </div>
    </div>
  );
};
