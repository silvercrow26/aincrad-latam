import React, {useState} from 'react'
export const Carousel = () => {
    const [imageUnturned, setimageUnturned] = useState("./unturnedd.png");
    const [veloren, setVeloren] = useState("./veloren01.png");
    const [veloren2, setVeloren2] = useState("./veloren02.png");
    const [veloren3, setVeloren3] = useState("./veloren03.png");
    const [veloren4, setVeloren4] = useState("./veloren04.png");
    const [veloren5, setVeloren5] = useState("./veloren05.png");
    return (
        <>
        <div>
          <img src={veloren} alt="veloren" className="w-100 carouselWidth"/>
        </div>
        </>
    )
}
