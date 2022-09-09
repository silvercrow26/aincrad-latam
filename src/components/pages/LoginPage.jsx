import React, { useState } from "react";
import { useAuth } from "../../firebase/context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import '../pages/login.css' 
export const LoginPage = () => {
  const [aincradLogo, setAincradLogo] = useState("./aincradlogo.png");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleChange = ({ target: { name, value } }) =>
    setUser({ ...user, [name]: value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
        if(error.code === "auth/internal-error"){
            setError('Correo invalido')
        }else if(error.code === "auth/email-already-in-use"){
            setError('El correo ya se encuentra en uso')
        
        }else if(error.code === "auth/wrong-password"){
            setError('La contraseña es incorrecta')
        }else if(error.code === 'auth/invalid-email'){
          setError('El email es invalido')
        }else{
            setError(error.message);
        }
        
    }
  };

  return (
    
    <div className="container shadow-lg pb-5 fondoLogin">
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
            className="form-control w-100 mb-3 border-success border-2"
            required
            onChange={handleChange}
            />
          <label className=" form-label mb-3">Contraseña</label> <span className="text-danger">*</span>
          <input
            type="password"
            placeholder="******"
            name="password"
            className="form-control w-100 border-success border-2"
            required
            onChange={handleChange}
            />
            {error && <p className="alert alert-danger w-100 mt-2 text-center">{error}</p>}
          <button className="buttonLogin mt-3" type="submit" >
            Log In
          </button>
        </form>
        <div className="d-flex justify-content-center">
        <a className="text-primary crearAccount"><Link to="/register">Crear una cuenta de aincradlatam.net gratis </Link></a>

        </div>
       
      </div>
            </div>
      </div>
    </div>
  );
};
