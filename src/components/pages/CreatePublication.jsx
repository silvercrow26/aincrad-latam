import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faStar, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import { useDocuments } from "../hooks/useDocuments";
import { EditPublication } from "./EditPublication";
import axios from 'axios'
import 'moment/locale/es'; 
import moment from 'moment';
const datestring = moment().locale('es').format('l') + " " + moment().locale('es').format('LT');

export const CreatePublication = () => {
  const {
    titulo,
    fecha,
    publicacion,
    creador,
    onInputChange,
    formState,
    setFormState,
    onResetForm,
  } = useForm({
    titulo: "",
    fecha: datestring,
    publicacion: "",
    creador: "Aincrad Latam Network",
  });
  const { data, fetchData, handleDelete, editing, handleEditPublication} = useDocuments();
  const URLpublicaciones = import.meta.env.VITE_APP_PUBLICATION_URL; 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(URLpublicaciones, formState)
      onResetForm(formState);
      Swal.fire(
        "¡Listo!",
        "La publicación se a realizado con exito",
        "success"
        );
      } catch (error) {
        Swal.fire("Error", "la publicación no se a podido realizar", "error");
        console.log(error);
      }
    };
    
    useEffect(() => {
     fetchData();
    
    }, [formState]);
    

 

  return (
    <>
      <div className="container text-light">
        <div className="backgroundCard mb-5 mt-5 row">
          <div className="col-md-8 col-sm-12">
            {editing === true ? (<EditPublication />) : ( 

              <form onSubmit={handleSubmit}>
              <div>
                <h2 className="mt-5 text-center">Crear Publicación</h2>
                <hr className="text-light" />
                <label>Titulo</label>
                <span className="text-danger"> *</span>
                <input
                  type="text"
                  name="titulo"
                  value={titulo}
                  placeholder="Ingrese titulo"
                  className="form-control w-100"
                  onChange={onInputChange}
                  />
                <label>Fecha</label>
                <span className="text-danger"> *</span>
                <input
                  type="text"
                  name="fecha"
                  value={fecha}
                  placeholder="Ingrese titulo"
                  className="form-control w-100"
                  onChange={onInputChange}
                  disabled
                  />
                <label>Publicación</label>
                <span className="text-danger"> *</span>
                <textarea
                 className="form-control w-100"
                 rows="6"
                 type="text"
                 name="publicacion"
                 value={publicacion}
                 placeholder="Escriba la publicación"
                 onChange={onInputChange}
                 
                 ></textarea>
                <label>Creado por</label>{" "}
                <span className="text-danger"> *</span>
                <input
                  type="text"
                  className="form-control w-100"
                  name="creador"
                  value={creador}
                  disabled
                  onChange={onInputChange}
                  />
                <button className="btn btn-success w-100 mt-2" type="submit">
                  Crear
                </button>
              </div>
            </form>
              )}
          </div>
          <div className="col-md-4 col-sm-12 mt-4">
            <h3 className="mt-5">Publicaciones activas {data.length}</h3>
            <hr />
            {data.length === 0 ? (
              <small>No hay publicaciones disponibles</small>
            ) : (
              data.map((data) => (
                <div className="text-center d-flex mb-3 container" key={data._id}>
                  <p>{data.titulo.slice(0, 15)}</p>
                  <button className="btn btn-warning mx-3 text-light"
                   onClick={() => handleEditPublication(data)}
                   >
                    {" "}
                    <FontAwesomeIcon
                      icon={faPenToSquare}
                     
                      className="text-light"
                    />
                  </button> 
                  <button
                    className="btn btn-danger text-light"
                    onClick={() => handleDelete(data._id)}
                  >
                    <FontAwesomeIcon icon={faTrash} className="text-light" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};
