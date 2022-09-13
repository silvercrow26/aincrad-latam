import React, {useState} from 'react'

export const Carousel = () => {
    const [imageUnturned, setimageUnturned] = useState("./unturnedd.png");
    const [veloren, setVeloren] = useState("./veloren01.png");
    const [veloren2, setVeloren2] = useState("./veloren02.png");
    const [veloren3, setVeloren3] = useState("./veloren03.png");
    const [veloren4, setVeloren4] = useState("./veloren04.png");
    const [veloren5, setVeloren5] = useState("./veloren05.png");
    return (
        <div id="carouselExampleIndicators" className="carousel slide animate__animated animate__fadeInDown animate__delay-1s " data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={veloren} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={imageUnturned} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={veloren2} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={veloren3} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={veloren4} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={veloren5} className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
  <hr className="text-light" />
</div>
    )
}
