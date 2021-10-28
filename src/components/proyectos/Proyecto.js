import { useContext } from "react";
import proyectoContext from "../../contex/proyectos/proyectoContext";
import tareaContext from "../../contex/tareas/tareaContext";

const Proyecto = ({ proyecto }) => {
  // obtener el state del proyectos
  const proyectosContext = useContext(proyectoContext);
  const { proyectoActual } = proyectosContext;

  // obtener estate de context de tareas
  const tareasContext = useContext(tareaContext);
  const { obtenerTareas } = tareasContext;

  // funcion  para agregar el proyecto actual
  const seleccionarProyecto = (id) => {
    proyectoActual(id); // fijar un proyecto actual
    obtenerTareas(id); // obtener las tareas cuando de click
  };

  return (
    <li>
      <button
        type="button"
        className="btn btn-blank"
        onClick={() => seleccionarProyecto(proyecto.id)}
      >
        {proyecto.nombre}
      </button>
    </li>
  );
};

export default Proyecto;
