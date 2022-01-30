
import '../App.css'

import { Link } from "react-router-dom"
const Game = () => {
    
return (
    <div className='row justify-content-between'>
    <h1>Esto es Game</h1>
            <Link to="/tablero" className="btn btn-game btn-warning">Empezar nueva aventura</Link>
    </div>
);

};

export default Game;