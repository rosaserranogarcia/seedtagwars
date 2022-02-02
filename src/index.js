
import ReactDOM from 'react-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App";
import Game from "./routes/Game";
import Pieces from "./routes/Pieces";
import Rules from "./routes/Rules";
import Tablero from "./routes/Tablero";
import Accion from "./routes/Accion";

import { BrowserRouter, Routes, Route } from 'react-router-dom';



ReactDOM.render(
      <BrowserRouter>

<App />
       <Routes>
          <Route path="Rules" element={<Rules />} />
          <Route path="Pieces" element={<Pieces />} />
          <Route path="Game" element={<Game />} />
          <Route path="Tablero" element={<Tablero />} />
          <Route path="Accion" element={<Accion />} />
       </Routes>
       </BrowserRouter>,
  document.getElementById('root')
);

