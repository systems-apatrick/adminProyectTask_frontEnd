import React, { useContext, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import alertaContext from "../../contex/alertas/alertaContext";
import proyectoContext from "../../contex/proyectos/proyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const alertsContext = useContext(alertaContext);
  const { alerta, mostrarAlerta } = alertsContext;

  // extraer proyecto de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { mensaje, proyectos, obtenerProyectos } = proyectosContext;

  // obtener proyectos cuando  carga los componentes
  useEffect(() => {
    // si hay un error
    if (mensaje) {
      mostrarAlerta(mensaje.msg, mensaje.categoria);
    }
    obtenerProyectos();
    // eslint-disable-next-line
  }, [mensaje]);

  // revisar si proyecto tiene contenido
  if (proyectos.length === 0)
    return <p>No hay proyectos, comienza creando tus proyectos</p>;

  return (
    <ul className="listado-proyecto">
      {alerta ? (
        <div className={`alerta ${alerta.categoria}`}>{alerta.msg}</div>
      ) : null}
      <TransitionGroup className="todo-list">
        {proyectos.map((proyecto) => (
          <CSSTransition key={proyecto._id} timeout={200} classNames="proyecto">
            <Proyecto proyecto={proyecto} />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </ul>
  );
};

export default ListadoProyectos;
