import { useReducer } from "react";
import { v4 as uuidv4 } from "uuid";

import {
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
  AGREGAR_PROYECTO,
  VALIDAR_FORMULARIO,
} from "../../types";
import proyectoContext from "./proyectoContext";
import proyectoReducer from "./proyectoReducer";

const ProyectoState = (props) => {
  const proyectos = [
    { id: 1, nombre: "Tienda Virtual" },
    { id: 2, nombre: "Proyecto Web" },
    { id: 3, nombre: "Diseño Web" },
    { id: 4, nombre: "Aplicacion movil" },
  ];
  const initialState = {
    proyectos: [],
    formulario: false,
    errorformulario: false,
  };

  // dispatch para ejecutar las acciones
  const [state, dispatch] = useReducer(proyectoReducer, initialState);

  // serie de funciones para el CRUD

  const mostrarFormulario = () => {
    dispatch({
      type: FORMULARIO_PROYECTO,
    });
  };

  // obtener los proyectos

  const obtenerProyectos = () => {
    dispatch({
      type: OBTENER_PROYECTOS,
      payload: proyectos,
    });
  };

  // agregar nuevo proyecto
  const agregarProyecto = (proyecto) => {
    proyecto.id = uuidv4();
    //   inserta proyecto en el state
    dispatch({
      type: AGREGAR_PROYECTO,
      payload: proyecto,
    });
  };

  // Validar el formulario por errores
  const mostrarError = () => {
    dispatch({
      type: VALIDAR_FORMULARIO,
    });
  };

  return (
    <proyectoContext.Provider
      value={{
        proyectos: state.proyectos,
        formulario: state.formulario,
        errorformulario: state.errorformulario,
        mostrarFormulario,
        obtenerProyectos,
        agregarProyecto,
      }}
    >
      {props.children}
    </proyectoContext.Provider>
  );
};

export default ProyectoState;
