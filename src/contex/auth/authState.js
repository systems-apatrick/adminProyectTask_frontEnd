import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import tokenAuth from "../../config/tokenAuth";
import {
  CERRAR_SESION,
  LOGIN_ERROR,
  LOGIN_EXITOSO,
  OBTENER_USUARIO,
  REGISTRO_ERROR,
  REGISTRO_EXITOSO,
} from "../../types";
import authContext from "./authContext";
import authReducer from "./authReducer";

const AuthState = (props) => {
  const initialState = {
    token: localStorage.getItem("token"),
    autenticado: false,
    usuario: null,
    mensaje: null,
    cargando: true,
  };

  const [state, dispatch] = useReducer(authReducer, initialState);

  // Funciones

  // registrar usuarios
  const registrarUsuario = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/usuarios", datos);
      dispatch({
        type: REGISTRO_EXITOSO,
        payload: respuesta.data,
      });

      // obtener el usuario   que ingresó sessión
      usuarioAutenticado();
    } catch (error) {
      //   console.log(error.response.data.msg);
      const alerta = {
        msg: error.response.data.msg,
        categoria: "alerta-error",
      };
      dispatch({
        type: REGISTRO_ERROR,
        payload: alerta,
      });
    }
  };

  //  retornar el usuario autenticado
  const usuarioAutenticado = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      //   TODO: Función para enviar el token por headers]
      tokenAuth(token);
    }

    try {
      const respuesta = await clienteAxios.get("/api/auth");
      dispatch({
        type: OBTENER_USUARIO,
        payload: respuesta.data.usuario,
      });
    } catch (error) {
      dispatch({
        type: LOGIN_ERROR,
      });
    }
  };

  // cuando el usuario inicia sesion

  const iniciarSession = async (datos) => {
    try {
      const respuesta = await clienteAxios.post("/api/auth", datos);
      dispatch({
        type: LOGIN_EXITOSO,
        payload: respuesta.data,
      });

      // obtener el usuario autenticado
      usuarioAutenticado();
    } catch (error) {
      // console.log(error.response.data.msg);
      let alerta = {};
      if (error.response == null) {
        alerta = {
          msg: "Error en conexion con el servidor",
          categoria: "alerta-error",
        };
      } else {
        alerta = {
          msg: error.response.data.msg,
          categoria: "alerta-error",
        };
      }

      dispatch({
        type: LOGIN_ERROR,
        payload: alerta,
      });
    }
  };

  // cerrar la sessión del usuario
  const cerrarSesion = () => {
    dispatch({
      type: CERRAR_SESION,
    });
  };
  return (
    <authContext.Provider
      value={{
        token: state.token,
        autenticado: state.autenticado,
        usuario: state.usuario,
        mensaje: state.mensaje,
        cargando: state.cargando,
        registrarUsuario,
        iniciarSession,
        usuarioAutenticado,
        cerrarSesion,
      }}
    >
      {props.children}
    </authContext.Provider>
  );
};
export default AuthState;
