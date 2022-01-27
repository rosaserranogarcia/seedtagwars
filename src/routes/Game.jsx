
import '../App.css'

import { Link } from "react-router-dom"
const Game = () => {
    
return (
    <div className='row justify-content-between'>
            <Link to="/" className="btn btn-game btn-outline-warning  ">Empezar nueva aventura</Link>
    </div>
);

};

export default Game;