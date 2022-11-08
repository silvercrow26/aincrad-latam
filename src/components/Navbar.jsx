import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHome, faUserShield, faCartShopping, faTowerCell, faEnvelope, faHandHoldingDollar,faUser, faScrewdriverWrench} from '@fortawesome/free-solid-svg-icons'
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
      title: 'Debes estar logueado para ver esta sección',
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
      <nav className="navbar navbar-expand-lg bg-dark bgNavbar text-light">
        <div className="container ">
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
            <ul className="navbar-nav mb-2 mb-lg-0 mx-auto ">
            <li className="nav-item">
                <Link className="nav-link text-light efectoLista" to="/">
                <FontAwesomeIcon icon={faHome} /> Inicio 
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light efectoLista" to="/staff">
                <FontAwesomeIcon icon={faUserShield} /> Staff
                </Link>
              </li>
              <li className="nav-item">
              <a className="nav-link text-light efectoLista" href="https://aincradlatam.tebex.io/" target="_blank"><FontAwesomeIcon icon={faCartShopping} /> Tienda</a>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light efectoLista" to="/contacto">
                <FontAwesomeIcon icon={faEnvelope} /> Contacto
                </Link>
              </li>
              <li className="nav-item">  
                <Link className="nav-link text-light efectoLista" to="/FAQ">
                <FontAwesomeIcon icon={faTowerCell} /> FAQ
                </Link>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link text-light efectoListaDonate text-light"
                  href="#donate"
                  onClick={toDonate}
                  >
                  <FontAwesomeIcon icon={faHandHoldingDollar} /> Donaciones
                </a>
              </li>
                </ul>
                </div>
                </div>
                </nav>
                ) : (
                  <nav className="navbar navbar-expand-lg bg-dark bgNavbar text-light">
                  <div className="container ">
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
                      <ul className="navbar-nav mb-2 mb-lg-0 mx-auto ">
                      <li className="nav-item">
                          <Link className="nav-link text-light efectoLista" to="/">
                          <FontAwesomeIcon icon={faHome} /> Inicio 
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link text-light efectoLista" to="/staff">
                          <FontAwesomeIcon icon={faUserShield} /> Staff
                          </Link>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link text-light efectoLista" href="https://aincradlatam.tebex.io/" target="_blank"><FontAwesomeIcon icon={faCartShopping} /> Tienda</a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link text-light efectoLista" to="/contacto">
                          <FontAwesomeIcon icon={faEnvelope} /> Contacto
                          </Link>
                        </li>
                        <li className="nav-item">  
                          <Link className="nav-link text-light efectoLista" to="/FAQ">
                          <FontAwesomeIcon icon={faTowerCell} /> FAQ
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link text-light efectoListaDonate text-light"
                            href="#donate"
                            onClick={toDonate}
                            >
                            <FontAwesomeIcon icon={faHandHoldingDollar} /> Donaciones
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link className="efectoListaDonate nav-link text-light" to={"/section/configuracion/panel"}>
                            <FontAwesomeIcon icon={faScrewdriverWrench} /> Panel
                          </Link>
                          
                        </li>
                      
              {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-warning m-auto " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <FontAwesomeIcon icon={faUser} />   
          </a>
          <ul className="dropdown-menu bg-dark ">
            <Link className="dropdown-item text-warning crearAccount" to={`/section/configuracion/perfil/${user.uid}`}>
            <li>Perfil</li>
            </Link>
            <li><a className="dropdown-item text-danger crearAccount" onClick={handleLogout}>Cerrar sesión</a></li>
          </ul>
        </li> */}

            </ul>
          </div>
        </div>
      </nav>
                )}
 
    </div>
  );
};
