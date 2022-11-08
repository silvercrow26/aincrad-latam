import React, {useEffect} from "react";
import { useDocuments } from "./hooks/useDocuments";
import { Link, useParams } from "react-router-dom";
export const PublicationCard = () => {
    const { data, fetchData} = useDocuments();

    useEffect(() => {
        fetchData()
    }, [])
    
    
    const sortedPublication = data.sort((a, b) => a.fecha < b.fecha ?  1 : -1)

  return (
    <>
      <div className="col-md-9 col-sm-12">
          {sortedPublication ? (
              sortedPublication.map(({ titulo, publicacion, fecha, creador, _id }) => (
                  <div key={_id}>
                      <div className="container">           
                <div className=" rounded container mb-3 bg-dark backgroundCard">
              <small className="text-secondary">{fecha}</small>
                  <h2 className="text-warning mt-3 ">{titulo}</h2>
                  
                  <p className="text-light parrafoTextarea overflow-hidden">{publicacion.slice(0,100)}...</p>
                  <hr />
                  <div className="d-flex justify-content-between pb-2">
                    <b className="text-light">
                      Creado por:{" "}
                      <b className="text-danger">
                        <i>{creador}</i>
                      </b>
                      
                    </b>
                        <Link to={`/publicacion/${_id}`}>
                    <button className="btn btn-outline-warning text-light">

                      Ver Más
                    </button>
                        </Link>
                  </div>
                </div>
              </div>
        </div>
            ))
          ) : (
            <div class="spinner-border" role="status">
              <span class="visually-hidden w-100">Loading...</span>
            </div>
          )}
      </div>
    </>
  );
};
