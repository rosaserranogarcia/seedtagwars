
import galletas from '../assets/caja_galletas.png'
import huevos from '../assets/caja_huevos.png'
import rana from '../assets/rana.png'
import dado from '../assets/dado.png'
import grogu from '../assets/noun-yoda.png'
import casilla from '../assets/casilla.png'
import armario from '../assets/casillax.png'
import '../App.css'

const Pieces = () => {

    return (
        <div>
            <h2 className="container text-center">Fichas</h2>
            <table class="table container colum-fichas table-bordered">
                <tbody>
                    <tr>
                        <th scope="row">Ficha de zona de carga (x6)</th>
                        <td><img className="fichas" src={casilla} /></td>
                    </tr>
                    <tr>
                        <th scope="row">Ficha de armario (x1)</th>
                        <td><img className="fichas" src={armario} /></td>
                    </tr>
                    <tr>
                        <th scope="row">Ficha de recipiente (x3)</th>
                        <td><img className="recipientes" src={armario} /><img className="recipientes" src={huevos} /><img className="recipientes" src={rana} /></td>
                    </tr>
                    <tr>
                        <th scope="row">Cajas de galletas (x3)</th>
                        <td><img className="fichas" src={galletas} /></td>
                    </tr>
                    <tr>
                        <th scope="row">Ranas (x3)</th>
                        <td><img className="fichas" src={rana} /></td>
                    </tr>
                    <tr>
                        <th scope="row">Huevos de rana (x3)</th>
                        <td><img className="fichas" src={huevos} /></td>
                    </tr>
                    <tr>
                        <th scope="row">Dado (x1)</th>
                        <td><img className="fichas" src={dado} /></td>
                    </tr>
                    <tr>
                        <th scope="row">grogu (x1)</th>
                        <td><img className="fichas" src={grogu} /></td>
                    </tr>
                </tbody>
            </table>

        </div>
    )

}

export default Pieces