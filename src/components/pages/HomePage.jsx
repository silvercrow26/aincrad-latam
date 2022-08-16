import { useState } from 'react'
import 'animate.css';
import '../../App.css';
import { imageFunction } from '../helpers/ImagesFunction';
import { Link } from 'react-router-dom';

export const HomePage = () => {

  const [imageRust, setImageRust] = useState('src/assets/rust.gif');
  const [imageRustBanner, setImageRustBanner] = useState('src/assets/rustBanner.jpg');
  const [imageUnturned, setimageUnturned] = useState('src/assets/unturned.gif');
  const [imageUnturnedBanner, setimageUnturnedBanner] = useState('src/assets/unturnedBanner.jpg');

  const {imagenRustOver, imagenRustOut, imagenUnturnedOver, imagenUnturnedOut, isHoveringRust, isHoveringUnturned} = imageFunction();

  return (
    <>
      <div className='container'>
        <p className='h1 animate__animated animate__fadeInDown animate__delay-0s'>Bienvenidos a Aincrad LATAM</p>
        <hr className='animate__animated animate__fadeInDown animate__delay-0.8s' />
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
      </div>
    </>
  )

}
