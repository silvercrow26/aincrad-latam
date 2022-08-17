import { useEffect, useState } from 'react'
import 'animate.css';
import '../../App.css';
import { imageFunction } from '../helpers/ImagesFunction';
import { Link } from 'react-router-dom';
import { ApiUnturned } from '../hooks/ApiUnturned';
import { ApiRust } from '../hooks/ApiRust';
import { UnturnedStatusItem } from '../UnturnedStatusItem';
import { RustStatusItem } from '../RustStatusItem';
// import {bgimage} from './background.mp4'

export const HomePage = () => {

  const [imageRust, setImageRust] = useState('./rust.gif');
  const [imageRustBanner, setImageRustBanner] = useState('./rustBanner.jpg');
  const [imageUnturned, setimageUnturned] = useState('./unturned.gif');
  const [imageUnturnedBanner, setimageUnturnedBanner] = useState('./unturnedBanner.jpg');

  const { imagenRustOver, imagenRustOut, imagenUnturnedOver, imagenUnturnedOut, isHoveringRust, isHoveringUnturned } = imageFunction();

  const { unturnedData, setUnturnedData, getUnturnedApi } = ApiUnturned();
  const { rustData, setRustData, getRustApi } = ApiRust();

  const fadeIn = 'animate__animated animate__fadeInDown';

  // Actualiza la fc sin recargar la pagina.
  useEffect(() => {
    getUnturnedApi();
    getRustApi();
  }, []);

  console.log(rustData);
  return (
    <>
      
        <div className='fondo'>
          <video className='' autoPlay loop muted>
            <source src='./background.mp4' type='video/mp4'></source>    
          </video>
        
      <div className='container content mt-5 text-light'>
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

        <h2 className='mt-5 animate__animated animate__fadeInDown animate__delay-2s text-center mb-4'>Estado del servidor</h2>
        <div className="d-flex justify-content-around">
          <hr className="w-25 animate__animated animate__fadeIn animate__delay-2s" />
          <hr className="w-25 animate__animated animate__fadeIn animate__delay-2s" />
        </div>

        <div className='row'>

          <div className='col-md-6 d-flex justify-content-center col-sm-12 animate__animated animate__fadeIn animate__delay-2s'>
            {rustData.map((data) => (
              <RustStatusItem key={data.id + data.hostname}
                {...data}
              />
            ))}
          </div>

          <div className='col-md-6 d-flex justify-content-center col-sm-12 animate__animated animate__fadeIn animate__delay-2s'>
            {unturnedData.map((data) => (
              <UnturnedStatusItem key={data.hostname + data.id}
                {...data} />
            ))}
          </div>

        </div>

        <h2 className='animate__animated animate__fadeInDown animate__delay-3s text-center'>Comunidad</h2>
        <div className="d-flex justify-content-around mb-3">
          <hr className="w-25 animate__animated animate__fadeIn animate__delay-3s" />
          <hr className="w-25 animate__animated animate__fadeIn animate__delay-3s" />
        </div>

        <div className='row'>
          <div className='col-md-4 col-sm-12 d-flex justify-content-center'>
            <iframe className="" src="https://discord.com/widget?id=360624851519537155&theme=dark" width="350" height="500" allowtransparency="true" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts">
            </iframe>
          </div>
          <div className='col-md-8 col-sm-12'>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis, dolores ducimus. Velit id laborum porro libero suscipit, assumenda vel placeat dolor veniam neque culpa animi, impedit ut. Tempore, corrupti numquam.</p>
          </div>
        </div>




        <h4 className='text-center animate__animated animate__fadeIn animate__delay-3s'>En progreso... 🧰⚒️</h4>

        <h2 className='animate__animated animate__fadeInDown animate__delay-4s text-center mt-5'>Staff</h2>
        <div className="d-flex justify-content-around">
          <hr className="w-25 animate__animated animate__fadeIn animate__delay-4s" />
          <hr className="w-25 animate__animated animate__fadeIn animate__delay-4s" />
        </div>
        <h4 className='text-center animate__animated animate__fadeIn animate__delay-4s'>En progreso... 🧰⚒️</h4>

        <h2 className='animate__animated animate__fadeInDown animate__delay-5s text-center mt-5'>Contacto</h2>
        <div className="d-flex justify-content-around">
          <hr className="w-25 animate__animated animate__fadeIn animate__delay-5s" />
          <hr className="w-25 animate__animated animate__fadeIn animate__delay-5s" />
        </div>
        <h4 className='text-center animate__animated animate__fadeIn animate__delay-5s'>En progreso... 🧰⚒️</h4>

      </div>

      </div>
    </>
  )
}
