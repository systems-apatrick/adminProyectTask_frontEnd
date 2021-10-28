import { useReducer } from "react";
import {
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  TAREAS_PROYECTO,
  VALIDAR_TAREA,
} from "../../types";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareas: [
      { id: 1, proyectoId: 1, nombre: "tarea1", estado: true },
      { id: 2, proyectoId: 1, nombre: "tarea3", estado: true },
      { id: 3, proyectoId: 2, nombre: "tarea2", estado: false },
      { id: 4, proyectoId: 2, nombre: "tarea4", estado: false },
      { id: 5, proyectoId: 2, nombre: "tarea5", estado: true },
      { id: 6, proyectoId: 3, nombre: "tarea6", estado: false },
      { id: 7, proyectoId: 3, nombre: "tarea7", estado: false },
      { id: 8, proyectoId: 1, nombre: "tarea8", estado: true },
      { id: 9, proyectoId: 4, nombre: "tarea00", estado: true },
      { id: 10, proyectoId: 4, nombre: "tarea-00", estado: true },
    ],
    tareasproyecto: null,
    errortarea: false,
  };

  // create dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // crear las funciones

  // obtener las tareas de un proyecto
  const obtenerTareas = (proyectoId) => {
    dispatch({
      type: TAREAS_PROYECTO,
      payload: proyectoId,
    });
  };

  // AGREGAR UNA TAREA AL PROYECTO SELECCIONADO
  const agregarTarea = (tarea) => {
    dispatch({
      type: AGREGAR_TAREA,
      payload: tarea,
    });
  };

  // VALIDA Y MUESTRA UN ERROR SI ES NECESARIO
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // eliminar un tarea por id
  const eliminarTarea = (id) => {
    dispatch({
      type: ELIMINAR_TAREA,
      payload: id,
    });
  };
  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
