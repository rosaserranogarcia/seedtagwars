
import galletas from '../assets/caja_galletas.png'
import huevos from '../assets/huevos.png'
import rana from '../assets/rana.png'
import grogu from '../assets/grogu.png'
import casilla from '../assets/casilla.png'
import armario from '../assets/casillax.png'
import base from '../assets/base.png'
import '../styles/layout/App.css'
import '../styles/layout/pieces.css'
import Footer from './Footer'
import { MDBCard, MDBCardImage, MDBCardBody, MDBCardTitle, MDBCardText, MDBCardGroup } from 'mdb-react-ui-kit';

const Pieces = () => {

    return (
        <div className='body-app ' >
            <h2 className="rulesContainer_title container text-center">Fichas del juego</h2>

            <MDBCardGroup className=' back-text  rulesContainer  rounded container '>
      <MDBCard className='bg-transparent '>
        <MDBCardBody>
          <MDBCardTitle className='text-center '>GROGU</MDBCardTitle>
        </MDBCardBody>
        <MDBCardImage className=' mx-auto mt-2 mb-3 img-pieces' src={grogu} alt='...' position='top' />
      </MDBCard>

      <MDBCard className='bg-transparent'>
        <MDBCardBody>
          <MDBCardTitle className='text-center '>TRES GALLETAS AZULES</MDBCardTitle>
        </MDBCardBody>
        <MDBCardImage className='mx-auto mt-2 mb-3  img-pieces' src={galletas} alt='...' position='top' />
      </MDBCard>

      <MDBCard className='bg-transparent'>
        <MDBCardBody>
          <MDBCardTitle className='text-center '>TRES RANAS</MDBCardTitle>
        </MDBCardBody>
        <MDBCardImage className='mx-auto mt-2 mb-3  img-pieces' src={rana} alt='...' position='top' />
      </MDBCard>

      
      <MDBCard className='bg-transparent '>
        <MDBCardBody>
          <MDBCardTitle className='text-center '>TRES HUEVOS DE RANA</MDBCardTitle>
        </MDBCardBody>
        <MDBCardImage className='mx-auto mt-2 mb-3  img-pieces' src={huevos} alt='...' position='top' />
      </MDBCard>

    </MDBCardGroup>
<br></br>
<br></br>
<br></br>
    <MDBCardGroup className=' rounded back-text  rulesContainer  container '>
      <MDBCard className='bg-transparent'>
        <MDBCardBody>
          <MDBCardTitle className='text-center '>SEIS ZONAS DE CARGA</MDBCardTitle>
        </MDBCardBody>
        <MDBCardImage className='mx-auto mt-2 mb-3  img-pieces' src={base} alt='...' position='top' />
      </MDBCard>

      <MDBCard className='bg-transparent'>
        <MDBCardBody>
          <MDBCardTitle className='text-center justify-center'>UN ARMARIO</MDBCardTitle>
          <MDBCardText className='text-center'>
          Donde se guardará la comida y no tendrá que llegar Grogu
        </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      <MDBCard className='bg-transparent'>
        <MDBCardBody>
          <MDBCardTitle className='text-center '>TRES COMPARTIMENTOS EN EL ARMARIO</MDBCardTitle>
          <MDBCardText className='text-center'>
          Que contendran las galletas , ranas y huevos
        </MDBCardText>
        </MDBCardBody>
      </MDBCard>

      
      <MDBCard className='bg-transparent'>
        <MDBCardBody>
          <MDBCardTitle className='text-center '>UN DADO EN FORMA DE BOTÓN</MDBCardTitle>
          <MDBCardText className='text-center'>
            Que retornará valores entre 1 y 4
        </MDBCardText>
        </MDBCardBody>
      </MDBCard>

    </MDBCardGroup>
<br></br>
<br></br>
<br></br>
            <Footer />
        </div>
    )

}

export default Pieces