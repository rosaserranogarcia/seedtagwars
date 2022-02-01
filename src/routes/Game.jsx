
import '../App.css'

import { Link } from "react-router-dom"
const Game = () => {
    
return (
    <div className='container'>
    <div className='row justify-content-between'>
            <Link to="/tablero" className="btn btn-game btn-warning">EMPEZAR NUEVA AVENTURA</Link>
    </div>
    </div>
);

};

export default Game;