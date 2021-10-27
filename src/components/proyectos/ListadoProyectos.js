import { useContext, useEffect } from "react";
import proyectoContext from "../../contex/proyectos/proyectoContext";
import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  // extraer proyecto de state inicial
  const proyectosContext = useContext(proyectoContext);
  const { proyectos, obtenerProyectos } = proyectosContext;

  // obtener proyectos cuando  carga los componentes
  useEffect(() => {
    obtenerProyectos();
  }, []);

  // revisar si proyecto tiene contenido
  if (proyectos.length === 0) return null;

  return (
    <ul className="listado-proyecto">
      {proyectos.map((proyecto) => (
        <Proyecto key={proyecto.id} proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
