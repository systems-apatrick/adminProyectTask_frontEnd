import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // state para iniciar sesion
  const [usuario, guardarUsuario] = useState({
    email: "",
    password: "",
  });

  // extraer datos de usuario
  const { email, password } = usuario;

  const onChange = (e) => {
    guardarUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario quiere iniciar sesion

  const onSubmit = (e) => {
    e.preventDefault();

    // validar que no haya campos vacios

    // pasar al accion
  };
  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1> Iniciar Sesión</h1>
        <form onSubmit={onSubmit}>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Tu Email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Tu Password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              value="Iniciar Sesión"
              className="btn btn-primario btn-block"
            />
          </div>
        </form>
        <Link to={"/nueva-cuenta"} className="enlace-cuenta">
          Registrate
        </Link>
      </div>
    </div>
  );
};

export default Login;
