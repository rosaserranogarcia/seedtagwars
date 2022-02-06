import { NavLink } from "react-router-dom";
import React, { useState } from 'react';
import "../styles/layout/navbar.css";
import "../styles/layout/App.css"
const Navbar = () => {
    return (
        <div className="body-app bg-transparent"> 

            <header className="header container bg-transparent">
                <nav class="navbar navbar-expand-lg bg-transparent navbar-light bg-light">

                    <NavLink to="/inicio" className="btn btn-outline-warning">Inicio</NavLink>
                    <NavLink to="/rules" className="btn btn-outline-warning">Reglas del juego</NavLink>
                    <NavLink to="/pieces" className="btn btn-outline-warning">Fichas</NavLink>
                    <NavLink to="/game" className="btn btn-outline-warning">Juego</NavLink>
                </nav>
            </header>
        </div>

    )
};

export default Navbar;