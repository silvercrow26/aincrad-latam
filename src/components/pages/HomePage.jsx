import { useEffect, useState } from "react";
import "animate.css";
import "../../App.css";
import { Carousel } from "../Carousel";
import { PublicationCard } from "../PublicationCard";
import { useDocuments } from "../hooks/useDocuments";
import { Sidebar } from "../Sidebar";

export const HomePage = () => {
  const [aincradLogo, setAincradLogo] = useState("./aincradlogo.png")



  return (
    <>
      <div>
      
        <Carousel />
        <div className="content mt-5 text-light mb-5 container">
          <div className="row"> 
        <PublicationCard />

        {/* empieza SIDE BAR */}
      <Sidebar />
        
          </div>
        </div>
      </div>  
     
    </>
  );
};
