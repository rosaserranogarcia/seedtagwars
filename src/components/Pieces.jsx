
import galletas from '../assets/caja_galletas.png'
import huevos from '../assets/caja_huevos.png'
import rana from '../assets/rana.png'
import dado from '../assets/dado.png'
import grogu from '../assets/noun-yoda.png'
import casilla from '../assets/casilla.png'
import armario from '../assets/casillax.png'
import '../styles/layout/App.css'
import '../styles/layout/pieces.css'
import Footer from './Footer'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';

const Pieces = () => {

    return (
        <div className='cuerpo' >
            <h2 className="rulesContainer_title container text-center">Fichas del juego</h2>

            <MDBCardGroup className=' back-text  rulesContainer  container '>
      <MDBCard className='bg-transparent'>
        <MDBCardImage className='text-center mt-5 ' src={grogu} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle className='text-center'>GROGU</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='bg-transparent'>
        <MDBCardImage className='text-center mt-5 ' src={galletas} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle className='text-center'>TRES GALLETAS AZULES</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='bg-transparent'>
        <MDBCardImage className='text-center mt-5 ' src={rana} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle className='text-center'>TRES RANAS</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      
      <MDBCard className='bg-transparent'>
        <MDBCardImage className='text-center mt-5 ' src={huevos} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle className='text-center'>TRES HUEVOS DE RANA</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

    </MDBCardGroup>
<br></br>
<br></br>
<br></br>
    <MDBCardGroup className=' back-text  rulesContainer  container '>
      <MDBCard className='bg-transparent'>
        <MDBCardImage className='text-center mt-5 ' src={dado} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle className='text-center'>GROGU</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='bg-transparent'>
        <MDBCardImage className='text-center mt-5 ' src={casilla} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle className='text-center'>TRES GALLETAS AZULES</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='bg-transparent'>
        <MDBCardImage className='text-center mt-5 ' src={armario} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle className='text-center'>TRES RANAS</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

      
      <MDBCard className='bg-transparent'>
        <MDBCardImage className='text-center mt-5 ' src={huevos} alt='...' position='top' />
        <MDBCardBody>
          <MDBCardTitle className='text-center'>TRES HUEVOS DE RANA</MDBCardTitle>
        </MDBCardBody>
      </MDBCard>

    </MDBCardGroup>
            <Footer />
        </div>
    )

}

export default Pieces