import { useEffect, useState } from 'react'
import 'animate.css';
import '../../App.css';
import { imageFunction } from '../helpers/ImagesFunction';
import { Link } from 'react-router-dom';
import { ApiUnturned } from '../hooks/ApiUnturned';

export const HomePage = () => {

  const [imageRust, setImageRust] = useState('src/assets/rust.gif');
  const [imageRustBanner, setImageRustBanner] = useState('src/assets/rustBanner.jpg');
  const [imageUnturned, setimageUnturned] = useState('src/assets/unturned.gif');
  const [imageUnturnedBanner, setimageUnturnedBanner] = useState('src/assets/unturnedBanner.jpg');

  const {imagenRustOver, imagenRustOut, imagenUnturnedOver, imagenUnturnedOut, isHoveringRust, isHoveringUnturned} = imageFunction();

  const {unturnedData,setUnturnedData,getUnturnedApi} = ApiUnturned();

  // Actualiza la fc sin recargar la pagina.
  useEffect(() => {
    getUnturnedApi();
  }, []);
  
  console.log(unturnedData);
  return (
    <>
      <div className='container mt-5'>
        <h1 className='animate__animated animate__fadeInDown animate__delay-0s text-center'>Bienvenidos a Aincrad LATAM</h1>
        <hr className='animate__animated animate__fadeInDown animate__delay-0.4s' />
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

        <hr className='animate__animated animate__fadeInDown animate__delay-0.4s' />
        <h1 className='animate__animated animate__fadeInDown animate__delay-0s text-center'>Estado del servidor</h1>
          <div>

            {unturnedData ? unturnedData.map(data => {
              <p>{data.is_online}</p>
            }):(<p>cargando</p>)}

          </div>
        <hr className='animate__animated animate__fadeInDown animate__delay-0.4s' />
        <h1 className='animate__animated animate__fadeInDown animate__delay-0s text-center'>Comunidad</h1>

        <hr className='animate__animated animate__fadeInDown animate__delay-0.4s' />
        <h1 className='animate__animated animate__fadeInDown animate__delay-0s text-center'>Staff</h1>

        <hr className='animate__animated animate__fadeInDown animate__delay-0.4s' />
        <h1 className='animate__animated animate__fadeInDown animate__delay-0s text-center'>Contacto</h1>
      </div>
    </>
  )

}
