import React from 'react';
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./components/App";
import Game from "./components/Game";
import Pieces from "./components/Pieces";
import Rules from "./components/Rules";
import Tablero from "./components/Tablero";
import Inicio from "./components/Inicio";

import { BrowserRouter, Routes, Route } from 'react-router-dom';



ReactDOM.render(
      <BrowserRouter>

<App />
       <Routes>
          <Route path="Rules" element={<Rules />} />
          <Route path="Pieces" element={<Pieces />} />
          <Route path="Game" element={<Game />} />
          <Route path="Tablero" element={<Tablero />} />
          <Route path="Inicio" element={<Inicio />} />
       </Routes>
       </BrowserRouter>,
  document.getElementById('root')
);

