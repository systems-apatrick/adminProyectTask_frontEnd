import { useContext, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import proyectoContext from "../../contex/proyectos/proyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  // extraer proyecto de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  // obtener proyectos cuando  carga los componentes
  useEffect(() => {
    obtenerProyectos();
    // eslint-disable-next-line
  }, []);

  // revisar si proyecto tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando tus proyectos</p>;

  return (
    <ul className="listado-proyecto">
      <TransitionGroup>
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto.id} timeout={2000} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
