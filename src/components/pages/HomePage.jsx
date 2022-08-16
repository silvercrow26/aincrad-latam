import { useEffect, useState } from 'react'
import 'animate.css';
import '../../App.css';
import { imageFunction } from '../helpers/ImagesFunction';
import { Link } from 'react-router-dom';
import { ApiUnturned } from '../hooks/ApiUnturned';
import { ApiRust } from '../hooks/ApiRust';

export const HomePage = () => {

  const [imageRust, setImageRust] = useState('src/assets/rust.gif');
  const [imageRustBanner, setImageRustBanner] = useState('src/assets/rustBanner.jpg');
  const [imageUnturned, setimageUnturned] = useState('src/assets/unturned.gif');
  const [imageUnturnedBanner, setimageUnturnedBanner] = useState('src/assets/unturnedBanner.jpg');

  const { imagenRustOver, imagenRustOut, imagenUnturnedOver, imagenUnturnedOut, isHoveringRust, isHoveringUnturned } = imageFunction();

  const { unturnedData, setUnturnedData, getUnturnedApi } = ApiUnturned();
  const { rustData, setRustData, getRustApi } = ApiRust();

  const fadeIn = 'animate__animated animate__fadeInDown';

  // Actualiza la fc sin recargar la pagina.
  useEffect(() => {
    getUnturnedApi();
    getRustApi();
  }, []);

  console.log(unturnedData);
  console.log(rustData);

  return (
    <>
      <div className='container mt-5'>
        <h1 className='animate__animated animate__fadeInDown animate__delay-0s text-center'>Bienvenidos a Aincrad LATAM</h1>
        <hr className='animate__animated animate__fadeInDown animate__delay-1s' />
        <div className='row'>
          <div className='col contenedor zoom animate__animated animate__fadeIn animate__delay-1s'>
            <Link to='rust'>
              <img role="button" className='img' onMouseOut={imagenRustOut} onMouseOver={imagenRustOver} src={isHoveringRust ? imageRustBanner : imageRust}></img>
            </Link>
          </div>

          <div className='col zoom animate__animated animate__fadeIn animate__delay-1s'>
            <Link to='unturned'>
              <img role="button" className='img' onMouseOut={imagenUnturnedOut} onMouseOver={imagenUnturnedOver} src={isHoveringUnturned ? imageUnturnedBanner : imageUnturned}></img>
            </Link>
          </div>
        </div>

        <hr className='animate__animated animate__fadeInDown animate__delay-2s' />
        <h2 className='animate__animated animate__fadeInDown animate__delay-2s text-center mb-4'>Estado del servidor</h2>
        <div className='row'>

          <div className='col-md-6 col-sm-12 animate__animated animate__fadeIn animate__delay-2s'>
            {rustData.map(({ id, name, hostname, is_online, players }) => (
              <div className="text-center" key={id}>
                <p>{hostname}</p>
                <p>El servidor se encuentra: {is_online === '1' ? (<p className="text-success">ONLINE</p>) : (<p className="text-danger">OFFLINE</p>)}</p>
                <p>Jugadores: {players}</p>
              </div>
            ))}
          </div>

          <div className='col-md-6 col-sm-12 animate__animated animate__fadeIn animate__delay-2s'>
            {unturnedData.map(({ id, name, hostname, is_online, players }) => (
              <div className="text-center" key={id}>
                <p>{hostname}</p>
                <p>El servidor se encuentra: {is_online === '1' ? (<p className="text-success">ONLINE</p>) : (<p className="text-danger">OFFLINE</p>)}</p>
                <p>Jugadores: {players}</p>
              </div>
            ))}
          </div>


        </div>

        <hr className={fadeIn + ' animate__delay-3s' } />
        <h2 className='animate__animated animate__fadeInDown animate__delay-3s text-center'>Comunidad</h2>
        <h4  className='text-center animate__animated animate__fadeIn animate__delay-3s'>En progreso... 🧰⚒️</h4>

        <hr className={fadeIn + ' animate__delay-4s'} />
        <h2 className='animate__animated animate__fadeInDown animate__delay-4s text-center'>Staff</h2>
        <h4  className='text-center animate__animated animate__fadeIn animate__delay-4s'>En progreso... 🧰⚒️</h4>

        <hr className={fadeIn + ' animate__delay-5s'} />
        <h2 className='animate__animated animate__fadeInDown animate__delay-5s text-center'>Contacto</h2>
        <h4 className='text-center animate__animated animate__fadeIn animate__delay-5s'>En progreso... 🧰⚒️</h4>

      </div>
    </>
  )
}
