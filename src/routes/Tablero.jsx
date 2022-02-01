import '../App.css'
import { Link } from "react-router-dom"

const Tablero = () => {
    
    return (
        <div className='container'>
        <div className='row'>
        <div className='col text-end'>
        <Link to="/" className="btn  btn-dado  btn-warning " >DADO</Link>
        </div>
        </div>
        </div>
    );
    
    };
    
    export default Tablero;