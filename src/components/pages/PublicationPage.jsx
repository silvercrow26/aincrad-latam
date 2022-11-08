import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDocuments } from "../hooks/useDocuments";
import { faBackward } from "@fortawesome/free-solid-svg-icons";
export const PublicationPage = () => {
  const { data, getOnePublication, publicacionIndividual } = useDocuments();
  const { id } = useParams();
  useEffect(() => {
      getOnePublication(id)
     
  }, [])

  return (
    <div className="container">
      <Link className="btn btn-dark bgNavbar mt-3 text-light mb-3" to="/">
        <FontAwesomeIcon icon={faBackward} className="text-light" /> Volver al
        inicio
      </Link>
      {publicacionIndividual && (
        
          <div key={publicacionIndividual._id} className="contenedorPublication">
            <div>
              <div>
                <div className=" rounded  mb-3 bg-dark ">
                  <div className=" backgroundCard container p-4 ">
                  <div >
                    <h2 className="text-warning p-5 mt-3 text-center ">
                      {publicacionIndividual.titulo}
                    </h2>
                  </div> 
                  <div className="parrafoTextarea">
                    <p className="text-light text-center ">{publicacionIndividual.publicacion}</p>
                    </div>
                    <hr className="text-light" />
                    <div className="d-flex justify-content-between pb-2">
                      <b className="text-light">
                        Creado por:{" "}
                        <b className="text-danger">
                          <i>{publicacionIndividual.creador}</i>
                        </b>
                      </b>
                    </div>
                    <b className="text-light ">{publicacionIndividual.fecha}</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
 }
    </div>
  );
};
