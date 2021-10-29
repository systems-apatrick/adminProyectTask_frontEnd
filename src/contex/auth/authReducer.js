import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from "../../types";

const authReducer = (state, action) => {
  switch (action.type) {
    case REGISTRO_ERROR:
    case REGISTRO_EXITOSO:
    case LOGIN_ERROR:
    case LOGIN_EXITOSO:
    case CERRAR_SESION:
      return;
    default:
      return state;
  }
};
export default authReducer;
