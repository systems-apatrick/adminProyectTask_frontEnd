import { useContext, useEffect, useState } from "react";
import proyectoContext from "../../contex/proyectos/proyectoContext";
import TareaContext from "../../contex/tareas/tareaContext";

const FormTareas = () => {
  // Extraer si un proyecto esta activo
  const proyectosContext = useContext(proyectoContext);
  const { proyecto } = proyectosContext;

  // Extraer funciones del context de tareas
  const tareasContext = useContext(TareaContext);
  const {
    tareaseleccionada,
    errortarea,
    agregarTarea,
    validarTarea,
    obtenerTareas,
    actualizarTarea,
    limpiarTarea,
  } = tareasContext;

  useEffect(() => {
    if (tareaseleccionada != null) {
      guardarTarea(tareaseleccionada);
    } else {
      guardarTarea({
        nombre: "",
      });
    }
  }, [tareaseleccionada]);

  // state del formulario
  const [tarea, guardarTarea] = useState({
    nombre: "",
  });
  // extrae el nombre de la tarea
  const { nombre } = tarea;

  //  si no hay proyecto seleccionado
  if (!proyecto) return null;

  // Array destructuring para el proyecto
  const [proyectoActual] = proyecto;

  // leer los valores de formulario
  const handleChange = (e) => {
    guardarTarea({
      ...tarea,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    // validar
    if (nombre.trim() === "") {
      validarTarea();
      return;
    }

    // if es edicion o si es nueva tarea
    if (tareaseleccionada === null) {
      // agregar la nueva tarea al state de tareas
      tarea.proyecto = proyectoActual._id;
      agregarTarea(tarea);
    } else {
      // actualizar la tarea
      actualizarTarea(tarea);

      // elimina tarea seleccionada del state
      limpiarTarea();
    }

    // obtener y filtrar tares del proyecto actual
    obtenerTareas(proyectoActual._id);

    // reiniciar el form
    guardarTarea({
      nombre: "",
    });
  };

  return (
    <div className="formulario">
      <form onSubmit={onSubmit}>
        <div className="contenedor-input">
          <input
            type="text"
            className="input-text"
            placeholder="Nombre de la Nueva Tarea"
            name="nombre"
            value={nombre}
            onChange={handleChange}
          />
        </div>
        <div className="contenedor-input">
          <input
            type="submit"
            className="btn btn-primario btn-submit btn-block"
            value={tareaseleccionada ? "Editar Tarea" : "Agregar Tareas"}
          />
        </div>
      </form>
      {errortarea ? (
        <p className="mensaje error">El nombre de la tarea es obligatorio</p>
      ) : null}
    </div>
  );
};

export default FormTareas;
