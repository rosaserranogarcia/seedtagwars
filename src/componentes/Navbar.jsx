import { NavLink } from "react-router-dom"
import "../styles/layout/navbar.css"

const Navbar = () => {

    return (
        <div className="row ">
        <nav className= " navbar navbar-expand-lg scrolling-navbar ">
        <div className="container">
            <NavLink to="/rules" className="btn btn-outline-warning">Reglas del juego</NavLink>
            <NavLink to="/pieces"className="btn btn-outline-warning">Fichas</NavLink>
            <NavLink to="/game" className="btn btn-outline-warning">Juego</NavLink>
        </div>
        </nav>
        </div>
    )
};

export default Navbar;