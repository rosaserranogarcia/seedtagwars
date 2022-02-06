import '../styles/layout/App.css'
import '../styles/layout/tablero.css'
import { Link } from "react-router-dom"

const Tablero = () => {


    return (

        <div className=''>
            <div className=' body-app'>
                <div className='col text-end'>
                    <Link to="/" className="btn  btn-dado  btn-warning " onclick="throwDice ()">DADO</Link>
                    <img src="" alt="" />
                </div>
            </div>
        </div>
    );

};

export default Tablero;