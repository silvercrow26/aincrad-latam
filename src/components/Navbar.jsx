import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Navbar = () => {
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand text-light" to="/">Aincrad LATAM</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse d-flex justify-content-end navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="rust">Rust</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="unturned">Unturned</Link>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-light" href="#">Contacto</a>
                            </li>
                           
                        </ul>
                    </div>
                </div>
            </nav> */}

      {/* <nav className="navbar navbar-expand-lg inputForm text-light">
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-flex justify-content-end"
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="rust">
                  Rust
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="unturned">
                  Unturned
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav> */}

<nav className="navbar navbar-expand-lg bg-dark fixed-top bgNavbar text-light mb-5">
  <div className="container-fluid ">
    <a className="navbar-brand text-light efectoLista" href="#" id="inicio" >Aincrad LATAM</a>
    <button className="navbar-toggler collapsed buttonNav text-light " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon text-light mt-2">🢃</span> 
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mb-2 mb-lg-0 mx-5 ms-auto ">
      <li className="nav-item ">
                <Link className="nav-link text-light efectoLista" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light efectoLista" to="rust">
                  Rust
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light efectoLista" to="unturned">
                  Unturned
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light efectoLista" href="#">
                  Contacto
                </a>
              </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  );
};
