import yoda from '../assets/Baby-Yoda-galletas.jpeg'
import mando from '../assets/mando.png'



const Rules = () => {

    return (
        <div>

            <section className="row cabecera ">
                <img className=" container-fluid cab-mando  cabecera text-center img-fluid" alt="imagen de yoda con galletas azules" src={yoda} />
            </section>
            <h2 className="container text-center">Reglas de juego</h2>
            <p className="container text-left">Dispondremos de <strong>6 casillas</strong> que representan un camino en la zona de carga que lleva hasta el armario donde se encuentra segura la mercancía.</p>
            <p className="container-fluid text-center">🔲🔲🔲🔲🔲🔲❎</p>
            <p className="container text-left">De este modo tendremos <strong>7 casillas</strong>, 6 del camino y una que representa al armario. Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar el armario. Para ello deberás descargar la mercancía poco a poco. <br />
                <br />Este es el momento más delicado ya que <strong>Grogu</strong> puede aprovechar y llegar hasta el armario. Si eso ocurre se comerá lo que encuentre y <strong>Mando</strong> perderá la oportunidad de saber dónde esta <strong>Ahsoka</strong>. <strong>Ergo</strong>, te has quedado sin recompensa.

                <div className="container text-center"><img src={mando} /></div>
                <br />Además de esas <strong>7 piezas</strong> tendrás <strong>tres recipientes</strong> donde se guarda cada tipo de mercancía. <br /><br />De esta manera quedaría:</p>
            
            <ul class="container colum-caras colum-caras list-group ">
                <li class="list-group-item">Descargas una caja de galletas azules 🍪</li>
                <li class="list-group-item">Descargas un huevo de rana (con mucho cuidado)🥚</li>
                <li class="list-group-item">Descargas una rana 🐸</li>
                <li class="list-group-item">Grogu se mueve una casilla 👣</li>
            </ul>

            <p className="container text-left">Además habrá una ficha que represente dónde está <strong>Grogu.</strong></p>
            <p className="container text-left">Ganarás el juego si consigues descargar toda la mercancía. Perderás si <strong>Grogu.</strong> llega a la última casilla (el armario)</p>
        </div>
    )

}

export default Rules