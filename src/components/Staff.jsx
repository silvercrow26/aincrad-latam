import React from 'react'

export const Staff = () => {
  return (
    <div className="mb-5">
        <h2 className="animate__animated animate__fadeInDown animate__delay-4s text-center mt-5 ">
            Staff
          </h2>
          <div className="d-flex justify-content-around mb-4">
            <hr className="w-25 animate__animated animate__fadeIn animate__delay-4s" />
            <hr className="w-25 animate__animated animate__fadeIn animate__delay-4s" />
          </div>

          <div className="d-flex justify-content-around mb-4 animate__animated animate__fadeIn animate__delay-4s">
            <div className="card text-center mx-3">
              <img className="card-img-top rounded-circle" src="./silvercrou.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Silvercrow</h5>
                <a className="card-text text-light text-decoration-none" target="_blank" href="https://www.instagram.com/frxstmourne/" >@frxstmourne</a><br />
                <span className="text-danger">Owner</span><br />
                <b className="">Web Developer</b>
              </div>
            </div>

            <div className="card text-center mx-3">
              <img className="card-img-top rounded-circle" src="./defenzor.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">DEFEND</h5>
                <a className="card-text text-light text-decoration-none" target="_blank" href="https://www.instagram.com/z4myk/" >@z4myk</a><br />
                <span className="text-danger">Co-Owner</span><br />
                <b className="">Web Developer</b>
              </div>
            </div>

          </div>
          <div className="d-flex justify-content-center mb-4 animate__animated animate__fadeIn animate__delay-4s">
             <div className="card text-center mx-3">
              <img className="card-img-top rounded-circle" src="./fega.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Jukergan</h5>
                <a className="card-text text-light text-decoration-none" target="_blank" href="https://www.twitch.tv/jukergan" >@Jukergan</a><br />
                <span className="text-warning">MOD</span><br />
                <b className="">Graphic Designer</b>
              </div>
            </div>
          </div>
    </div>
  )
}
