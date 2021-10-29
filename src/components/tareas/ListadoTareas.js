import { useContext } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import proyectoContext from "../../contex/proyectos/proyectoContext";
import TareaContext from "../../contex/tareas/tareaContext";
import Tarea from "./Tarea";

const ListadoTareas = () => {
  // extraer proyectos del state inicial con el context
  const proyectosContext = useContext(proyectoContext);
  const { proyecto, eliminarProyecto } = proyectosContext;

  // extraer la tareas de un proyecto
  const tareasContext = useContext(TareaContext);
  const { tareasproyecto } = tareasContext;

  // si no hay proyecto seleccionado
  if (!proyecto) return <h2> Selecciona un proyecto</h2>;

  // array destructuring para extraer el proyecto actual
  const [proyectoActual] = proyecto;

  // eliminar un proyecto
  const onClickEliminar = () => {
    eliminarProyecto(proyectoActual._id);
  };
  return (
    <>
      <h2>Proyecto: {proyectoActual.nombre}</h2>
      <ul className="listado-tareas">
        {tareasproyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          <TransitionGroup>
            {tareasproyecto.map((tarea) => (
              <CSSTransition key={tarea.id} timeout={200} classNames="tarea">
                <Tarea tarea={tarea} />
              </CSSTransition>
            ))}
          </TransitionGroup>
        )}
      </ul>
      <button
        type="button"
        className="btn btn-eliminar"
        onClick={onClickEliminar}
      >
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
