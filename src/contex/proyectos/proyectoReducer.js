import {
  AGREGAR_PROYECTO,
  FORMULARIO_PROYECTO,
  OBTENER_PROYECTOS,
} from "../../types";

const proyectoReducer = (state, action) => {
  switch (action.type) {
    case FORMULARIO_PROYECTO:
      return {
        ...state,
        formulario: true,
      };
    case OBTENER_PROYECTOS:
      return {
        ...state,
        proyectos: action.payload,
      };
    case AGREGAR_PROYECTO:
      return {
        ...state,
        proyectos: [...state.proyectos, action.payload],
        formulario: false,
      };
    default:
      return state;
  }
};

export default proyectoReducer;
