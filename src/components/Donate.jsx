import React from "react";
import paypal from "../assets/paypal.png";
export const Donate = () => {
  return (
    <section className="container mb-5">
      <h2
        className="animate__animated animate__fadeInDown animate__delay-3s text-center mt-5 text-warning"
        id="donate"
      >
        Donaciones
        <br /> ❤️
      </h2>

      <div className="d-flex justify-content-around mb-4">
        <hr className="w-25 animate__animated animate__fadeIn animate__delay-3s" />
        <hr className="w-25 animate__animated animate__fadeIn animate__delay-3s" />
      </div>
      <div className="row">
        <div className="col-md-8 col-sm-12 mt-2 mb-4 ">
          <p>
            Si estás interesado en aportar tu granito de arena y colaborar con
            la comunidad estaremos totalmente agradecidos! <br />
          </p>
            <p>
              como gesto de agradecimiento tendras un <b className="text-warning">rango especial</b> en nuestro
              canal de discord y <br /> apareceras en nuestro ranking de <b className="text-warning">top donadores.</b>{" "}
            </p>
        </div>
        <div className="col-md-4 col-sm-12">
          <div className="mb-3">
            <div>
              <img className="w-25 mx-5" src={paypal} alt="logo paypal" />
              <p>aincradlatam@gmail.com</p>
            </div>
            <div>
              <a
                href="https://cafecito.app/aincradlatam"
                rel="noopener"
                target="_blank"
              >
                <img
                  srcSet="https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x"
                  src="https://cdn.cafecito.app/imgs/buttons/button_1.png"
                  alt="Invitame un café en cafecito.app"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
