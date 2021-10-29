import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from "../../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_EXITOSO:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        autenticado: true,
        mensaje: null,
      };
    case REGISTRO_ERROR:
      return {
        ...state,
        token: null,
        mensaje: action.payload,
      };
    case LOGIN_ERROR:
    case LOGIN_EXITOSO:
    case CERRAR_SESION:
      return;
    default:
      return state;
  }
};
export default authReducer;
