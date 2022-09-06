import React, { useState } from "react";
import { useAuth } from "../../firebase/context/AuthContext";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

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
        }else{
            setError(error.message);
        }
    }
  };

  return (
    <div className="bg-white container shadow-lg">
      <h2 className="text-center text-dark">login page</h2>
      <div>
        <form className="container" onSubmit={handleSubmit}>
          <label className="mb-3">Email</label>
          <input
            type="email"
            placeholder="correo@gmail.com"
            name="email"
            className="form-control w-50 mb-3"
            onChange={handleChange}
            />
          <label className="mb-3">Contraseña</label>
          <input
            type="password"
            placeholder="******"
            name="password"
            className="form-control w-50"
            onChange={handleChange}
            />
            {error && <p className="alert alert-danger w-50 mt-2">{error}</p>}
          <button className="btn btn-success mt-2" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};
