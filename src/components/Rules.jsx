import '../styles/layout/rules.css';
import Footer from './Footer';



const Rules = () => {

    return (

        <div className='body-app '>
        <h2 className='rulesContainer_title text-center'>Misión</h2>
            <article className="container back-text rulesContainer rounded">
            <p>
            El cazarrecompensas mandaloriano Din Djarin, conocido como «el
            Mandaloriano» o simplemente «Mando», está a cargo de Grogu mientras
            viaja por la galaxia realizando todo tipo de encargos. En esta
            ocasión el encargo es muy especial. Debe entregar huevos de rana, no
            fertilizados, galletas azules, ¡qué ricas! y unas ranas. Todo ello
            es muy importante ya que este cargamento es de vital importancia
            para restablecer contacto con Ahsoka Tano. El objetivo es entregar
            la mercancía a un contacto en el planeta Nevarro. Él nos dará la
            información del paradero de Ahsoka, información que usaremos para
            volver a intentar que sea la maestra de Grogu como Jedi. El problema
            es que nuestro contacto ha sido muy claro, si no llega la mercancía
            no hay trato. Tu misión es tratar que Grogu no encuentre la
            mercancía. Mando ha recibido muy buenas recomendaciones sobre tus
            habilidades custodiando mercancía así que ha decidido contratarte
            para que todo salga bien. Ayuda a Mando a conseguir su objetivo y
            tendrás una buena recompensa.
          </p>
          </article>
          <br></br>
            <h2 className="rulesContainer text-center rulesContainer_title">Reglas de juego</h2>

            <p className="rulesContainer text-left back-text container rounded">Dispondremos de <strong>6 casillas</strong> que representan un camino en la zona de carga que lleva hasta el armario donde se encuentra segura la mercancía.</p>
            <p className="container-fluid text-center">🔲🔲🔲🔲🔲🔲❎</p>
            <p className="rulesContainer text-left back-text container rounded">De este modo tendremos <strong>7 casillas</strong>, 6 del camino y una que representa al armario. Durante el viaje has hecho muy bien tu trabajo pero ahora debes vaciar el armario. Para ello deberás descargar la mercancía poco a poco. <br />
                <br />Este es el momento más delicado ya que <strong>Grogu</strong> puede aprovechar y llegar hasta el armario. Si eso ocurre se comerá lo que encuentre y <strong>Mando</strong> perderá la oportunidad de saber dónde esta <strong>Ahsoka</strong>. <strong>Ergo</strong>, te has quedado sin recompensa.<br /><br /> Además de esas <strong>7 piezas</strong> tendrás <strong>tres recipientes</strong> donde se guarda cada tipo de mercancía.</p>
                <br /><br />
            
            <p className="rulesContainer text-center back-text container rounded ">
            * Descargas una caja de galletas azules 🍪<br />* Descargas un huevo de rana (con mucho cuidado)🥚<br />* Descargas una rana 🐸<br />* Grogu se mueve una casilla 👣
            </p>
            <br /><br />
            <p className="rulesContainer text-left back-text container rounded ">Además habrá una ficha que represente dónde está <strong>Grogu. <br /><br />Ganarás el juego si consigues descargar toda la mercancía. Perderás si <strong>Grogu.</strong> llega a la última casilla (el armario)</strong></p>
            <Footer />
        </div>
    )

}

export default Rules