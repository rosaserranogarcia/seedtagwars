import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <nav className= " navbar navbar-dark bg-dark">
        <div className="container">
            <NavLink to="/rules" className="btn btn-outline-warning">Reglas del juego</NavLink>
            <NavLink to="/pieces"className="btn btn-outline-warning">Fichas</NavLink>
            <NavLink to="/game" className="btn btn-outline-warning">Juego</NavLink>
        </div>
        </nav>
    )
};

export default Navbar;