import Tarea from "./Tarea";

const ListadoTareas = () => {
  const tareasProyecto = [
    { nombre: "tarea1", estado: true },
    { nombre: "tarea2", estado: false },
    { nombre: "tarea3", estado: true },
    { nombre: "tarea4", estado: false },
    { nombre: "tarea5", estado: true },
    { nombre: "tarea6", estado: false },
    { nombre: "tarea7", estado: false },
    { nombre: "tarea8", estado: true },
  ];
  return (
    <>
      <h2>Proyecto</h2>
      <ul className="listado-tareas">
        {tareasProyecto.length === 0 ? (
          <li className="tarea">
            <p>No hay tareas</p>
          </li>
        ) : (
          tareasProyecto.map((tarea) => <Tarea tarea={tarea} />)
        )}
      </ul>
      <button type="button" className="btn btn-eliminar">
        Eliminar Proyecto &times;
      </button>
    </>
  );
};

export default ListadoTareas;
