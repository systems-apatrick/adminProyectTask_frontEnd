import { useContext, useState } from "react";
import proyectoContext from "../../contex/proyectos/proyectoContext";

const NuevoProyecto = () => {
  // obtener el state de formulario
  const proyectosContext = useContext(proyectoContext);
  const { formulario, mostrarFormulario, agregarProyecto } = proyectosContext;

  const [proyecto, guardarProyecto] = useState({
    nombre: "",
  });
  const { nombre } = proyecto;

  const onChangeProyecto = (e) => {
    guardarProyecto({
      ...proyecto,
      [e.target.name]: e.target.value,
    });
  };

  // cuando el usuario envia un proyecto
  const onSubmitProyecto = (e) => {
    e.preventDefault();

    //   validar el proyecto
    if (nombre === "") return;

    //   agregar el state
    agregarProyecto(proyecto);

    //   reiniciar el form
    guardarProyecto({
      nombre: "",
    });
  };

  // Mostrar formulario
  const onClickFormulario = () => {
    mostrarFormulario();
  };
  return (
    <>
      <button
        type="button"
        className="btn btn-block btn-primario"
        onClick={onClickFormulario}
      >
        Nuevo Proyecto
      </button>
      {formulario ? (
        <form className="formulario-nuevo-proyecto" onSubmit={onSubmitProyecto}>
          <input
            type="text"
            className="input-text"
            placeholder="Crear nuevo proyecto"
            name="nombre"
            value={nombre}
            onChange={onChangeProyecto}
          />
          <input
            type="submit"
            className="btn btn-primario btn-block"
            value="Agregar Proyecto"
          />
        </form>
      ) : null}
    </>
  );
};

export default NuevoProyecto;
