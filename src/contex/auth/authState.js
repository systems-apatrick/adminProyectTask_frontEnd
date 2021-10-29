import { useReducer } from "react";
import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from "../../types";
import authContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: null,
    usuario: null,
    mensaje: null,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Funciones

  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthState;
