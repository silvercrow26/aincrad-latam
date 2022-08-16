import { useState } from 'react'
import reactLogo from './assets/react.svg'
import 'animate.css';
import './App.css';
import { ImageRust } from './ImageRust';

function App() {

  const [imageRust, setImageRust] = useState('public/rust.gif');
  const [imageUnturned, setimageUnturned] = useState('public/unturned.gif');


  const onMouseOver = ({target}) => {

    if(target.src == 'public/rust.gif') {
      setImageRust('public/rustBanner.jpg');
      target.className = 'img';
    }

    if(target.src == 'public/unturned.gif') {
      setimageUnturned('public/unturnedBanner.jpg');
      target.className = 'img';
    }
    console.log(target);
    
  }

  const onMouseOut = (event) => {
    if(event.target.src == 'public/rustBanner.jpg') {
      setImageRust('public/rust.gif');
    }

    if(event.target.src == 'public/unturnedBanner.jpg') {
      setimageUnturned('public/unturned.gif');
    }

  }
  
  
  return (
    <div className='container'>
      <p className='h1 animate__animated animate__fadeInDown animate__delay-0s'>Bienvenidos a Aincrad LATAM</p>
      <hr className='animate__animated animate__fadeInDown animate__delay-0.8s'/>
          <div className='row'>
            <div className='col contenedor zoom animate__animated animate__fadeIn animate__delay-1s'>
              <img className='img' onMouseOut={onMouseOut} onMouseOver={onMouseOver} src={imageRust}></img>
            </div>

            <div className='col zoom animate__animated animate__fadeIn animate__delay-1s'>
              <img className='img' onMouseOut={onMouseOut} onMouseOver={onMouseOver} src={imageUnturned}></img>
            </div>
          </div>
    </div>
  )
}

export default App
