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


export const HomePage = () => {


  return (
    <>
      <div>
        <video className="" autoPlay loop muted>
          <source src="./background.mp4" type="video/mp4"></source>
        </video>

        <Carousel />
        <div className="container content mt-5 text-light">
          <h1 className="animate__animated animate__fadeInDown animate__delay-0s text-center text-white">
            Aincrad LATAM
          </h1>
          {/* <hr className="animate__animated animate__fadeInDown animate__delay-1s mt-5" /> */}


          <ServerStatus />
          {/* <ImagenHomeItem /> */}

          <Community />

          <Staff />

          <Donate />
 
          <Contact />
        
        </div>
      </div>  
    </>
  );
};
