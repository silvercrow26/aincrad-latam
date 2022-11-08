import React, { useState } from "react";
import { useDocuments } from "../hooks/useDocuments";
import { useForm } from "../hooks/useForm";
import axios from "axios";
import Swal from 'sweetalert2'
export const EditPublication = () => {
  const {
    currentData,
    setCurrentData,
    setData,
    data,
    setEditing,
  } = useDocuments();
  const { onResetForm } = useForm();

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentData({ ...currentData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const res = await axios.put(
        `http://localhost:9000/api/publication/${currentData._id}`,
        {
          titulo: currentData.titulo,
          fecha: currentData.fecha,
          publicacion: currentData.publicacion,
          creador: currentData.creador,
          _id: currentData._id,
        }
        );

        onResetForm(currentData);
        setEditing(false);
      if(res){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "La publicación se a sido editado con exito!",
          showConfirmButton: false,
          timer: 1200,
        });
      }

    }catch(error){
       Swal.fire("Error", "la publicación no se a podido actualizar", "error");
       console.log(error);
    }
    
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="mt-5 text-center">Editar Publicación</h2>
          <hr className="text-light" />
          <label>Titulo</label>
          <span className="text-danger"> *</span>
          <input
            type="text"
            name="titulo"
            value={currentData.titulo}
            className="form-control w-100"
            onChange={onInputChange}
          />
          <label>Fecha</label>
          <span className="text-danger"> *</span>
          <input
            type="text"
            name="fecha"
            value={currentData.fecha}
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
            value={currentData.publicacion}
            placeholder="Escriba la publicación"
            onChange={onInputChange}
          ></textarea>
          <label>Creado por</label> <span className="text-danger"> *</span>
          <input
            type="text"
            className="form-control w-100"
            name="creador"
            value={currentData.creador}
            onChange={onInputChange}
          />
          <button className="btn btn-success w-100 mt-2" type="submit">
            Actualizar
          </button>
        </div>
      </form>
    </>
  );
};
