import { Link } from "react-router-dom";
import "../css/Header.css";

const Header = () => {
    return (
        <div className="container-Header">
                <li><Link to={"/Home"}>Inicio</Link></li>
                <li><Link to={"/CrearActividad"}>Crear Actividad</Link></li>
                <li><Link to={"/"}>Salir</Link></li>
        </div>
    )
}

export default Header;