import ListadoProyectos from "../proyectos/ListadoProyectos";
import NuevoProyecto from "../proyectos/NuevoProyecto";

const Sidebar = () => {
  return (
    <aside>
      <h1>
        TASK <span>&</span> PROJECTS
      </h1>

      <NuevoProyecto />

      <div className="proyectos">
        <h2>Tus Proyectos</h2>
        <ListadoProyectos />
      </div>
    </aside>
  );
};

export default Sidebar;
