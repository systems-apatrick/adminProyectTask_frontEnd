import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import Proyectos from "./components/proyectos/Proyectos";
import RutaPrivada from "./components/rutas/RutaPrivada";
import tokenAuth from "./config/tokenAuth";
import AlertaState from "./contex/alertas/alertaState";
import AuthState from "./contex/auth/authState";
import ProyectoState from "./contex/proyectos/proyectoState";
import TareaState from "./contex/tareas/tareaState";

// revisar  si tenemos un token
const token = localStorage.getItem("token");
if (token) {
  tokenAuth(token);
}

function App() {
  return (
    <ProyectoState>
      <TareaState>
        <AlertaState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/nueva-cuenta" component={NuevaCuenta} />
                <RutaPrivada exact path="/proyectos" component={Proyectos} />
              </Switch>
            </Router>
          </AuthState>
        </AlertaState>
      </TareaState>
    </ProyectoState>
  );
}

export default App;
