import { NavLink } from "react-router-dom"
import "../styles/layout/navbar.css"

const Navbar = () => {

    return (
        <div className="">

            <header className="header container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">

                    <NavLink to="/Inicio" className="btn btn-outline-warning">Inicio</NavLink> 
                    <NavLink to="/rules" className="btn btn-outline-warning">Reglas del juego</NavLink>
                    <NavLink to="/pieces" className="btn btn-outline-warning">Fichas</NavLink>
                    <NavLink to="/game" className="btn btn-outline-warning">Juego</NavLink> 
                </nav>
            </header>
        </div>

    )
};

export default Navbar;