import { useContext, useEffect } from "react";
import authContext from "../../contex/auth/authContext";
import proyectoContext from "../../contex/proyectos/proyectoContext";
import TareaContext from "../../contex/tareas/tareaContext";

const Barra = () => {
  // extraer la información de autenticación
  const authsContext = useContext(authContext);
  const { usuario, usuarioAutenticado, cerrarSesion } = authsContext;

  // extraer proyecto de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { resetProyectos } = proyectosContext;

  // extraer la tareas de un proyecto
  const tareasContext = useContext(TareaContext);
  const { resetTareas } = tareasContext;
  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);

  // cerrar session
  const exitSesion = () => {
    resetTareas();
    resetProyectos();
    cerrarSesion();
  };
  return (
    <header className="app-header">
      {usuario ? (
        <p className="nombre-usuario">
          Bienvenido <span>{usuario.nombre}</span>
        </p>
      ) : null}
      <nav className="nav-principal">
        <button className="btn btn-blank cerrar-sesion" onClick={exitSesion}>
          Cerrar Sesión{" "}
        </button>
      </nav>
    </header>
  );
};

export default Barra;
