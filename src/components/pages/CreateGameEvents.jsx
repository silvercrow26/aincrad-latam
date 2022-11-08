import React, { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import Swal from "sweetalert2";
import axios from "axios";
import { useDocuments } from "../hooks/useDocuments";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faStar,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
export const CreateGameEvents = () => {
  const {
    titulo,
    fecha,
    hora,
    servidor,
    formState,
    onInputChange,
    onResetForm,
  } = useForm({
    titulo: "",
    fecha: "",
    hora: "",
    servidor: "",
  });

  const { eventData, fetchEventData, handleEventDelete } = useDocuments();

  const URLeventos = import.meta.env.VITE_APP_EVENT_URL;
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        URLeventos,
        formState
      );
      if (res.status === 201 || 200) {
        Swal.fire("¡Listo!", "El evento se a creado con exito", "success");
      }
      onResetForm(formState);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchEventData();
  }, [formState]);

  return (
    <>
      <div className="container text-light">
        <div className="backgroundCard mb-5 mt-5">
          <h2 className="text-center mt-3 mb-3">Crear Evento</h2>
          <div className="mb-4">
            <form onSubmit={handleSubmit}>
              <label>Titulo</label>
              <span className="text-danger">*</span>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="Ingrese titulo"
                name="titulo"
                value={titulo}
                onChange={onInputChange}
                required
              />
              <label>Fecha</label>
              <span className="text-danger">*</span>
              <input
                className="form-control mb-2"
                type="date"
                placeholder=""
                name="fecha"
                value={fecha}
                onChange={onInputChange}
                required
              />
              <label>Hora</label>
              <span className="text-danger">*</span>
              <input
                className="form-control mb-2"
                type="time"
                placeholder=""
                name="hora"
                value={hora}
                onChange={onInputChange}
                required
              />
              <label>Servidor</label>
              <span className="text-danger">*</span>
              <input
                className="form-control mb-2"
                type="text"
                placeholder="ingrese servidor"
                name="servidor"
                value={servidor}
                onChange={onInputChange}
                required
              />
              {eventData.length === 0 ? (
                <button className="btn btn-success w-100 mt-2" type="submit">
                  Crear
                </button>
              ) : (
                <button
                  className="btn btn-success w-100 mt-2 disabled"
                  type="submit"
                >
                  Crear
                </button>
              )}
            </form>
          </div>
          <div className="container mb-5">
            {eventData ? (
              eventData.map((evento) => (
                <div>
                  <div class="alert alert-danger text-center" role="alert">
                    Ya hay un evento activo!
                  </div>
                  <div className="d-flex justify-content-center mt-3">
                    <p className="text-center">
                      <small>
                        {evento.titulo} {evento.fecha} - {evento.hora}
                      </small>
                    </p>
                    <button
                      className="btn btn-danger text-light mx-3"
                      onClick={() => handleEventDelete(evento._id)}
                    >
                      <FontAwesomeIcon icon={faTrash} className="text-light" />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div>No hay un evento creado.</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
