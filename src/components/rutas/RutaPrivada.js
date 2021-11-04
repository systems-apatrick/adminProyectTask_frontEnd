import { useContext, useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import authContext from "../../contex/auth/authContext";

const RutaPrivada = ({ component: Component, ...props }) => {
  const authsContext = useContext(authContext);
  const { autenticado, cargando, usuarioAutenticado } = authsContext;

  useEffect(() => {
    usuarioAutenticado();
    // eslint-disable-next-line
  }, []);
  return (
    <Route
      {...props}
      render={(props) =>
        !autenticado && !cargando ? (
          <Redirect to="/" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

export default RutaPrivada;
