import React from "react";
import { faTowerCell } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Accordion from "react-bootstrap/Accordion";
import { FAQ2 } from "../FAQ2";
export const FAQPage = () => {
  return (
    <>
      <div>
        <h2 className="text-center text-warning mt-5 mb-5">
          {" "}
          <div className="bg-light p-4 container-fluid">
            <FontAwesomeIcon icon={faTowerCell} /> FAQ
          </div>
        </h2>
        <div className="d-flex justify-content-center">
          <div className="w-50">
            <div class="accordion-flush" id="accordionExample">
              <div class="accordion-item mb-2">
                <h2 class="accordion-header" id="headingOne">
                  <button
                    class="accordion-button"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseOne"
                    aria-expanded="false"
                    aria-controls="collapseOne"
                  >
                    ¿Cómo unírme a sus servidores?
                  </button>
                </h2>
                <div
                  id="collapseOne"
                  class="accordion-collapse collapse "
                  aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Para unirte a uno de nuestros servidores debes dirigirte
                      al inicio y copiar la IP que se encuentra en el lado
                      derecho del sitio web, dependiendo el juego en el que
                      estes.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-2">
                <h2 class="accordion-header" id="headingTwo">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    ¿Cómo puedo ser parte del staff?
                  </button>
                </h2>
                <div
                  id="collapseTwo"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Para poder ser parte del{" "}
                      <span className="text-danger">Staff</span> debes estar
                      atento al <b>Discord oficial</b> ya que lo usaremos para
                      anunciar cuando el formulario de postulación esté
                      disponible.
                    </p>
                  </div>
                </div>
              </div>
              <div class="accordion-item mb-2">
                <h2 class="accordion-header" id="headingThree">
                  <button
                    class="accordion-button collapsed "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    ¿Cómo reportar a un jugador?
                  </button>
                </h2>
                <div
                  id="collapseThree"
                  class="accordion-collapse collapse"
                  aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample"
                >
                  <div class="accordion-body">
                    <p>
                      Para reportar a un jugador debes ingresar a nuestro
                      discord oficial, en la parte inferior encontraras el canal
                      de <b>Consultas </b>utiliza el sistema de tickets para
                      comunicarte con el{" "}
                      <span className="text-danger">Staff</span> y en breve
                      obtendras una respuesta.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
                <FAQ2 />
      </div>
    </>
  );
};
