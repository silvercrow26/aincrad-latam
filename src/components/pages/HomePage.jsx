import { useEffect, useState } from "react";
import "animate.css";
import "../../App.css";
import { ImagenHomeItem } from "../ImagenHomeItem";
import { ServerStatus } from "../ServerStatus";
import { Community } from "../Community";
import { Staff } from "../Staff";
import { Contact } from "../Contact";
import { Donate } from "../Donate";
import { Carousel } from "../Carousel";
import { onAuthStateChanged } from "firebase/auth";


export const HomePage = () => {

  const [aincradLogo, setAincradLogo] = useState("./aincradlogo.png")

  return (
    <>
      <div>

        <video className="" autoPlay loop muted>
          <source src="./background.mp4" type="video/mp4"></source>
        </video>

        <Carousel />
        <div className="container content mt-5 text-light mb-5">
       

          <ServerStatus />
          {/* <ImagenHomeItem /> */}
          <div className="d-flex justify-content-center" >
        <img src={aincradLogo} alt="Aincrad logo" className="animate__animated animate__fadeInDown animate__delay-1s aincradLogoHome " /> 

          </div>
          <Community />

          <Staff />

          <Donate />
 
          <Contact />
        
        </div>
      </div>  
    </>
  );
};
