import React, { useState } from "react";
import { useAuth } from "../../firebase/context/AuthContext";
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom'
export const RegisterPage = () => {
  const [aincradLogo, setAincradLogo] = useState("./aincradlogo.png");
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
        if(error.code === "auth/internal-error"){
            setError('Correo invalido')
        }else if(error.code === "auth/email-already-in-use"){
            setError('El correo ya se encuentra en uso')
        
        }else if(error.code === "auth/weak-password"){
            setError('La contraseña tiene que tener al menos 6 caracteres')
        }else{
            setError(error.message);
        }
    }
  };

  return (
    <div className="container shadow-lg pb-5">
      <video className="" autoPlay loop muted>
          <source src="./background.mp4" type="video/mp4"></source>
        </video>
      <div className="">
        <div className="d-flex justify-content-center">
      <img src={aincradLogo} className="w-25 pt-3 " alt="" />
        </div>

        <div className="row">
        <div className="col-md-12 col-sm-12">
        <form className="container text-light  " onSubmit={handleSubmit}>
          <label className=" form-label mb-3">Email</label> <span className="text-danger">*</span>
          <input
            type="email"
            placeholder="correo@gmail.com"
            name="email"
            className="form-control w-100 mb-3 border-warning border-2"
            onChange={handleChange}
            />
          <label className=" form-label mb-3">Contraseña</label> <span className="text-danger">*</span>
          <input
            type="password"
            placeholder="******"
            name="password"
            className="form-control w-100 border-warning border-2"
            onChange={handleChange}
            />
            {error && <p className="alert alert-danger w-100 mt-2 text-center">{error}</p>}
          <button className="buttonRegister w-100 mt-3" type="submit" >
            Register
          </button>
        </form>
        <div className="d-flex justify-content-center">
        <b className="text-light ">¿Ya tienes una cuenta?</b>
        <Link to="/login">
         <a className="mx-2 crearAccount">Conectar</a>
        </Link>
        </div>
      </div>
            </div>
      </div>
    </div>
  );
};
