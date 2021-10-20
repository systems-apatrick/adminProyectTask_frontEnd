import Proyecto from "./Proyecto";

const ListadoProyectos = () => {
  const proyectos = [
    { nombre: "Tienda Virtual" },
    { nombre: "Proyecto Web" },
    { nombre: "Diseño Web" },
  ];

  return (
    <ul className="listado-proyecto">
      {proyectos.map((proyecto) => (
        <Proyecto proyecto={proyecto} />
      ))}
    </ul>
  );
};

export default ListadoProyectos;
