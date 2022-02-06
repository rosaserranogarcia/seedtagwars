import ReactPlayer from 'react-player'
import '../styles/layout/inicio.css'
import Footer from './Footer';


const Action = () => {



    return (
        <div className='wrapper'>
            <div data-reactroot>
                <div className="row body-inicio ">
                    <ReactPlayer className='video-inicio container'
                        url={require('../video/video-trailer.mp4')}
                        controls={true}
                        playing={true}
                        loop={true}
                    />

                    <Footer />
                </div>
            </div>
        </div>

    );


}
export default Action;