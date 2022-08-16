import { useState } from 'react'
import 'animate.css';
import '../../App.css';

export const HomePage = () => {
    
const [imageRust, setImageRust] = useState('public/rust.gif');
const [imageRustBanner, setImageRustBanner] = useState('public/rustBanner.jpg');
const [imageUnturned, setimageUnturned] = useState('public/unturned.gif');
const [imageUnturnedBanner, setimageUnturnedBanner] = useState('public/unturnedBanner.jpg');
const [isHoveringRust, setIsHoveringRust] = useState(false);
const [isHoveringUnturned, setIsHoveringUnturned] = useState(false);

const imagenRustOver = () => {
setIsHoveringRust(true)

}
const imagenRustOut = () => {
setIsHoveringRust(false)
}

const imagenUnturnedOver = () =>{
setIsHoveringUnturned(true);
}

const imageUnturnedOut = () => {
setIsHoveringUnturned(false);
}


    return (
        <>


    <div className='container'>
      <p className='h1 animate__animated animate__fadeInDown animate__delay-0s'>Bienvenidos a Aincrad LATAM</p>
      <hr className='animate__animated animate__fadeInDown animate__delay-0.8s'/>
          <div className='row'>
            <div className='col contenedor zoom animate__animated animate__fadeIn animate__delay-1s'>
              <img className='img' onMouseOut={imagenRustOut} onMouseOver={imagenRustOver} src={isHoveringRust ? imageRustBanner : imageRust}></img>
            </div>
 
            <div className='col zoom animate__animated animate__fadeIn animate__delay-1s'>
              <img className='img' onMouseOut={imageUnturnedOut} onMouseOver={imagenUnturnedOver} src={isHoveringUnturned ? imageUnturnedBanner : imageUnturned }></img>
            </div>
          </div>
    </div>

        </>
    )
}
