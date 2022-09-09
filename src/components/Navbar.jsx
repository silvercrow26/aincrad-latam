import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import { useAuth } from "../firebase/context/AuthContext";
import Swal from 'sweetalert2'
export const Navbar = () => {
  const [aincradLogo, setAincradLogo] = useState("/aincradlogo.png");
  const { user, logout } = useAuth();
  const [error, setError] = useState(false)
  // console.log(user.uid)
  const navigate = useNavigate();

  const handleLogout = async() => {
    await logout()
    navigate('/')
  }

  const toDonate = () => {
    navigate("/#donate");
  };

  const needLogin = () => {
    setError(true)
    Swal.fire({
      position: 'top-end',
      icon: 'warning',
      title: 'Debes estar logeado para ver esta sección',
      showConfirmButton: false,
      width: 250,
      timer: 1500
    })
    setTimeout(() => {
        setError(false)
    }, 2000)  

  }

  return (
    <div>
          {!user ? (
      <nav className="navbar navbar-expand-lg bg-dark fixed-top bgNavbar text-light mb-5 ">
        <div className="container-fluid mx-5 ">
          <a className="navbar-brand text-light" href="#" id="inicio">
            <img src={aincradLogo} className="logoAincrad" />{" "}
          </a>
          <button
            className="navbar-toggler collapsed text-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-light mt-2">🢃</span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0 mx-5 ms-auto ">
              <li className="nav-item ">
                <Link className="nav-link text-light efectoLista" to="/">
                  Inicio
                </Link>
              </li>
 
              <li className="nav-item" onClick={needLogin}>
                <Link className="nav-link disabled" to="veloren">
                  Veloren
                </Link>
              </li>
              <li className="nav-item" onClick={needLogin}>
                <Link className="nav-link disabled" to="unturned">
                  Unturned
                </Link>
              </li>
             
              <li className="nav-item">
                <a
                  className="nav-link text-light efectoListaDonate text-warning"
                  href="#donate"
                  onClick={toDonate}
                >
                  Donaciones❤️
                </a>
              </li>
              <li>  
                <Link to="/login">
                  <button className="buttonNav">Login</button>
                </Link>
                  </li>
                </ul>
                </div>
                </div>
                </nav>
                ) : (
                  <nav className="navbar navbar-expand-lg bg-dark fixed-top bgNavbar text-light mb-5">
        <div className="container-fluid mx-5 ">
          <a className="navbar-brand text-light" href="#" id="inicio">
            <img src={aincradLogo} className="logoAincrad" />{" "}
          </a>
          <button
            className="navbar-toggler collapsed buttonNav text-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            >
            <span className="navbar-toggler-icon text-light mt-2">🢃</span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
            >
            <ul className="navbar-nav mb-2 mb-lg-0 mx-5 ms-auto ">
              
              <li className="nav-item ">
                <Link className="nav-link text-light efectoLista" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light efectoLista" to="/section/veloren">
                  Veloren
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light efectoLista" to="/section/unturned">
                  Unturned
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light efectoListaDonate text-light"
                  href="#donate"
                  onClick={toDonate}
                  >
                  Donaciones❤️
                </a>
              </li>
              <li class="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-warning m-auto " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faUser} />
          </a>
          <ul className="dropdown-menu bg-dark ">
            <Link className="dropdown-item text-warning crearAccount" to={`/section/configuracion/perfil/${user.uid}`}>
            <li>Perfil</li>
            </Link>
            <li><a className="dropdown-item text-danger crearAccount" onClick={handleLogout}>Cerrar sesión</a></li>
          </ul>
        </li>
            </ul>
          </div>
        </div>
      </nav>
                )}
 
    </div>
  );
};
