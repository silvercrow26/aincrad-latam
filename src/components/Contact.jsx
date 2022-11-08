import React, {useState} from "react";
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import { validarEmail, validarTextArea } from "./helpers/validacionesContacto";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export const Contact = () => {

    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
    const [error, setError] = useState(false)
    
    const handleSubmit = (e) => {
    e.preventDefault();
    if(validarEmail(email) && validarTextArea(mensaje)){
        emailjs.sendForm('service_hgjjd69', 'template_031qdeb', e.target, 'e7FottGxHsjQ4RnQY')
        .then((result) => {
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'El email se a enviado con exito!',
              showConfirmButton: false,
              timer: 1500
            }) 
        }, (error) => {
            console.log(error.text);
        });
        e.target.reset();
        setEmail('');
        setMensaje('');
    }else{
        setError(true)
        setTimeout(() => {
            setError(false)
        }, 2000)    
    }
};

  return (
    <div className="mb-5">
      <h2 className="text-center mt-5 text-light animate__animated animate__fadeIn animate__delay-0.5s" id="#contacto">
      <FontAwesomeIcon icon={faEnvelope} /> Contacto
      </h2>
      <div className="d-flex justify-content-around">
        <hr className="w-25 text-light" />
        <hr className="w-25 text-light" />
      </div>

      <form onSubmit={handleSubmit} className="animate__animated animate__fadeIn animate__delay-0.5s ">
        <label className="label-control mb-2 text-light ">Nombre</label> <span className="text-danger">*</span>
        <input
          className="form-control mb-4 inputForm shadow-none text-light row"
          type="text"
          placeholder="Ingrese su nombre"
          name="name"
          autoComplete='off'
          required
        />
        <label className="label-control mb-2 text-light">Email</label> <span className="text-danger">*</span>
        <input
          className="form-control mb-4 inputForm shadow-none text-light row"
          type="email"
          placeholder="Ingrese su email"
          onChange={(e) => setEmail(e.target.value) }
          name="email"
          value={email}
          autoComplete='off'
          required
        />
        <label className="label-control mb-2 text-light">Mensaje</label> <span className="text-danger">*</span>
        <textarea
          className="form-control mb-4 inputForm shadow-none text-light row"
          type="text"
          placeholder="Ingrese su mensaje"
          rows="4"
          name="mensaje"
          onChange={(e) => setMensaje(e.target.value) }
          value={mensaje}
          autoComplete='off'
          required
        />
        {error ? (<div class="alert alert-danger text-center" role="alert">
  Porfavor ingrese los datos correctamente
</div>) : null}
        <button className="btn btn-success w-100 mb-5 ">Enviar</button>
      </form>
      <p className="text-center mt-2">Aincrad LATAM Todos los derechos reservados © 2022</p>
    </div>
  );
};
 