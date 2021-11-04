import { useContext, useEffect } from "react";
import authContext from "../../contex/auth/authContext";

const Barra = () => {
  // extraer la información de autenticación
  const authsContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authsContext;
  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);
  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Bienvenido <span>{usuario.nombre}</span>
        </p>
      ) : null}
      <nav className="nav-principal">
        <button
          className="btn btn-blank cerrar-sesion"
          onClick={() => cerrarSesion()}
        >
          Cerrar Sesión{" "}
        </button>
      </nav>
    </header>
  );
};

export default Barra;
