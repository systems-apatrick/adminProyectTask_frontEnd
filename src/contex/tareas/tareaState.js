import { useReducer } from "react";
import clienteAxios from "../../config/axios";

import {
  ACTUALIZAR_TAREA,
  AGREGAR_TAREA,
  ELIMINAR_TAREA,
  LIMPIAR_TAREA,
  RESET_TAREAS,
  TAREAS_PROYECTO,
  TAREA_ACTUAL,
  VALIDAR_TAREA,
} from "../../types";
import TareaContext from "./tareaContext";
import TareaReducer from "./tareaReducer";

const TareaState = (props) => {
  const initialState = {
    tareasproyecto: [],
    errortarea: false,
    tareaseleccionada: null,
  };

  // create dispatch y state
  const [state, dispatch] = useReducer(TareaReducer, initialState);

  // crear las funciones

  // obtener las tareas de un proyecto
  const obtenerTareas = async (proyecto) => {
    try {
      const resultado = await clienteAxios.get("/api/tareas", {
        params: { proyecto },
      });
      dispatch({
        type: TAREAS_PROYECTO,
        payload: resultado.data.tareas,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // AGREGAR UNA TAREA AL PROYECTO SELECCIONADO
  const agregarTarea = async (tarea) => {
    try {
      const resultado = await clienteAxios.post("/api/tareas", tarea);
      dispatch({
        type: AGREGAR_TAREA,
        payload: resultado.data.tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // VALIDA Y MUESTRA UN ERROR SI ES NECESARIO
  const validarTarea = () => {
    dispatch({
      type: VALIDAR_TAREA,
    });
  };

  // eliminar un tarea por id
  const eliminarTarea = async (id, proyecto) => {
    try {
      await clienteAxios.delete(`/api/tareas/${id}`, { params: { proyecto } });

      dispatch({
        type: ELIMINAR_TAREA,
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // EDITA O MODIFICA UN TAREA
  const actualizarTarea = async (tarea) => {
    try {
      const resultado = await clienteAxios.put(
        `/api/tareas/${tarea._id}`,
        tarea
      );
      dispatch({
        type: ACTUALIZAR_TAREA,
        payload: resultado.data.tarea,
      });
    } catch (error) {
      console.log(error);
    }
  };

  // EXTRAE UNA TAREA PARA EDICION
  const guardarTareaActual = (tarea) => {
    dispatch({
      type: TAREA_ACTUAL,
      payload: tarea,
    });
  };

  // LIMPIAR TAREA SELECCIONADA
  const limpiarTarea = () => {
    dispatch({
      type: LIMPIAR_TAREA,
    });
  };

  // RESETEAR TAREAS
  const resetTareas = () => {
    dispatch({
      type: RESET_TAREAS,
    });
  };

  return (
    <TareaContext.Provider
      value={{
        tareasproyecto: state.tareasproyecto,
        errortarea: state.errortarea,
        tareaseleccionada: state.tareaseleccionada,
        obtenerTareas,
        agregarTarea,
        validarTarea,
        eliminarTarea,
        guardarTareaActual,
        actualizarTarea,
        limpiarTarea,
        resetTareas,
      }}
    >
      {props.children}
    </TareaContext.Provider>
  );
};

export default TareaState;
