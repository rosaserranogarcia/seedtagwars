import '../styles/layout/App.css'
import { Link } from "react-router-dom"
import '../styles/layout/game.css'
import Footer from './Footer'


const Game = () => {

    return (
        <div className='wrapper body-app'>

            <div data-reactroot>
                <div className='body-game '>
                    <Link to="/tablero" className="btn btn-game btn-warning">EMPEZAR NUEVA AVENTURA</Link>

                </div>
            </div>
                <Footer />
        </div>
    );

};

export default Game;