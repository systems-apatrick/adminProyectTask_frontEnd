import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  ESTADO_TAREA,
  LIMPIAR_TAREA,
  TAREAS_PROYECTO,
  TAREA_ACTUAL,
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
    tareaseleccionada: null,
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
    tarea.id = uuidv4();
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

  // Cambia el estado de cada tarea
  const cambiarEstadoTarea = (tarea) => {
    dispatch({
      type: ESTADO_TAREA,
      payload: tarea,
    });
  };

  // EXTRAE UNA TAREA PARA EDICION
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  // EDITA O MODIFICA UN TAREA
  const actualizarTarea = (tarea) => {
    dispatch({
      type: ACTUALIZAR_TAREA,
      payload: tarea,
    });
  };

  // LIMPIAR TAREA SELECCIONADA
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareas: state.tareas,
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        cambiarEstadoTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
