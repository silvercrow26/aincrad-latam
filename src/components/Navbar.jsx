import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark">
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
            </nav>
        </>
    )
}
