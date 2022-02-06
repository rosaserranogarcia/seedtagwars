import '../styles/layout/App.css'
import { Link } from "react-router-dom"
import Footer from './Footer';
import'../styles/layout/game.css'


const Game = () => {
    
return (
    <div className='body-app '>
    <div className='row   justify-content-between'>
            <Link to="/tablero" className="btn btn-game btn-warning">EMPEZAR NUEVA AVENTURA</Link>
    </div>
        <Footer />
    </div>
);

};

export default Game;