import React, {useState} from 'react'

export const Carousel = () => {
    const [imageUnturned, setimageUnturned] = useState("./unturnedd.png");
    const [veloren, setVeloren] = useState("./veloren01.png");
    const [veloren2, setVeloren2] = useState("./veloren02.png");
    return (
        <div id="carouselExampleIndicators" className="carousel slide animate__animated animate__fadeInDown animate__delay-1s  " data-bs-ride="true">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div class="carousel-item active">
      <img src={veloren} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={imageUnturned} className="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={veloren2} className="d-block w-100" alt="..." />
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
</div>
    )
}
