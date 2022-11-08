import React from "react";

export const FAQ2 = () => {
  return (
    <div>
      <div className="d-flex justify-content-center">
        <div className="w-50">
          <div class="accordion-flush" id="accordionExample">
            <div class="accordion-item mb-2">
              <h2 class="accordion-header" id="headingFour">
                <button
                  class="accordion-button"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFour"
                  aria-expanded="false"
                  aria-controls="collapseFour"
                >
                  ¿Cuales son los puertos de su servidor de Minecraft?
                </button>
              </h2>
              <div
                id="collapseFour"
                class="accordion-collapse collapse "
                aria-labelledby="headingFour"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Para unirte a nuestro servidor de minecraft BEDROCK debes
                    incluir a la IP el puerto <b>19132</b> y para la version
                    JAVA debes usar el puerto <b>25565</b>
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-2">
              <h2 class="accordion-header" id="headingFive">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseFive"
                  aria-expanded="false"
                  aria-controls="collapseFive"
                >
                  ¿Cada cuánto tiempo WIPEAN el servidor de Veloren?
                </button>
              </h2>
              <div
                id="collapseFive"
                class="accordion-collapse collapse"
                aria-labelledby="headingFive"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Actualmente no tenemos una fecha estimada para realizar los{" "}
                    <b>wipeos</b>, ya que el juego se encuentra en pre-alpha,
                    sin embargo, dependemos de una actualización masiva para
                    considerar efectuar un <b>wipe</b>.
                  </p>
                </div>
              </div>
            </div>
            <div class="accordion-item mb-5">
              <h2 class="accordion-header" id="headingSix">
                <button
                  class="accordion-button collapsed "
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseSix"
                  aria-expanded="false"
                  aria-controls="collapseSix"
                >
                  ¿Cómo puedo donar a la network?
                </button>
              </h2>
              <div
                id="collapseSix"
                class="accordion-collapse collapse"
                aria-labelledby="headingSix"
                data-bs-parent="#accordionExample"
              >
                <div class="accordion-body">
                  <p>
                    Si estás interesado en aportar tu granito de arena y
                    colaborar con la comunidad podes realizarlo usando{" "}
                    <b>
                      <a
                        href="https://cafecito.app/aincradlatam"
                        target="_blank"
                      >
                        Cafesito
                      </a>
                    </b>{" "}
                    si eres de Argentina o{" "}
                    <b>
                      <a
                        href="https://ko-fi.com/aincradlatam/goal?g=0"
                        target="_blank"
                      >
                        Ko Fi
                      </a>
                    </b>{" "}
                    si eres de otra parte del mundo.
                    <br />
                    como gesto de agradecimiento tendras un{" "}
                    <span className="text-warning">rango especial </span>en
                    nuestro canal de discord y apareceras en nuestro ranking de
                    <span className="text-warning">top donadores.</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
