import '../App.css'
import { Link } from "react-router-dom"

const Tablero = () => {
    
    return (
        <div className=''>
        <h1>Esto es Tablero</h1>
        <Link to="/" className="btn  btn-warning " >Dado</Link>
        </div>
    );
    
    };
    
    export default Tablero;