import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faScrewdriverWrench,
  faCirclePlus,
  faArrowRightFromBracket,
  faSignal,
  faSatelliteDish,
} from "@fortawesome/free-solid-svg-icons";
import aincradLogo from "../../../public/aincradlogo.png";
import React from "react";
import { useAuth } from "../../firebase/context/AuthContext";
import { Link } from "react-router-dom";

export const AdministrationPage = () => {
  const { user, logout } = useAuth();
  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <>
      <section className="container">
        <div className="container-fluid p-2">
          <h2 className="text-light text-center mt-5 mb-5">
            {" "}
            <FontAwesomeIcon
              icon={faScrewdriverWrench}
              className="text-warning"
            />{" "}
            Panel de administración
          </h2>
          <hr className="text-light" />
        </div>
        <div className="row">
          <div className="col-md-4 col-sm-12 mt-5">
            <nav className="text-light text-center row">
                <Link
                  to="/section/configuracion/panel/publicaciones"
                  className="btn btn-light text-light mb-2 backgroundCard"
                >
                  <FontAwesomeIcon
                    icon={faCirclePlus}
                    className="text-success"
                  />{" "}
                  Crear publicación
                </Link>
                  <Link to="/section/configuracion/panel/eventos"
                  className="btn btn-light text-light mb-2 backgroundCard">
                <FontAwesomeIcon icon={faCirclePlus} className="text-success" />{" "}
                Crear Evento
                  </Link>
              <button className="btn btn-light mb-2 backgroundCard text-light disabled">
                <FontAwesomeIcon icon={faCirclePlus} className="text-success" />{" "}
                Crear Staff
              </button>
              <button className="btn btn-light mb-2  backgroundCard text-light disabled">
                Próximamente
              </button>
              <button className="btn btn-light mb-2  backgroundCard text-light disabled ">
                Próximamente
              </button>
              <button className="btn btn-danger mb-2" onClick={handleLogout}>
                <FontAwesomeIcon
                  icon={faArrowRightFromBracket}
                  className="text-light"
                />{" "}
                Cerrar sesión
              </button>
              <div className="mt-5">
                <img src={aincradLogo} className=" w-50 mb-5" alt="logo" />
              </div>
            </nav>
          </div>
          <div className="col-md-8 col-sm-12 mb-5">
            <h3 className="text-light text-center mb-3">
              <FontAwesomeIcon
                icon={faSatelliteDish}
                className="text-warning"
              />{" "}
              Servidores
            </h3>
            <div className=" bg-secondary p-5 mb-4 backgroundCard">
              <p className="text-center text-light">
                Server 1{" "}<br />
                <FontAwesomeIcon icon={faSignal} className="text-success" />
              </p>
            </div>
            <div className=" bg-secondary p-5 mb-4 backgroundCard">
              <p className="text-center text-light">
                Server 2{" "}<br />
                <FontAwesomeIcon icon={faSignal} className="text-success" />
              </p>
            </div>
            <div className="bg-secondary p-5 mb-4 backgroundCard">
              <p className="text-center text-light">
                Server 3{" "}<br />
                <FontAwesomeIcon icon={faSignal} className="text-success" />
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
