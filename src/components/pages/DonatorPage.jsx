import React from "react";

export const DonatorPage = () => {
  const donator = [
    " Kirunter",
    " Road To Lv7940",
    " MannyNegro",
    " Yakarey",
    " (っ◔◡◔)っ ♥ᴹᶜᶜ ᴳᵃⁿᵍ",
    " Merchant",
    " !SALEESO",
  ];
  return (
    <div>
      <div className="headerStaff">
        <h4 className="text-center text-warning mt-3 mb-5 p-4">Donadores ❤️</h4>
      </div>
      <div className="container">
        <p className="text-light">
          hoy en día gracias a ellos y a nuestros donadores anonimos estamos
          creciendo mucho como comunidad, cada granito de arena es bienvenido,
          todo lo recaudado es destinado al grupo de desarrollo de{" "}
          <b className="text-warning">Aincrad Latam Network</b> para mejorar
          cada uno de los servidores.
        </p>
      </div>
      <div className=" text-center container">
        {donator.map((usuarios) => (
          <div className=" mt-3">
            <p className="text-warning">{usuarios}</p>
          </div>
        ))}
      </div>
      <div className="text-light mt-5 container">
        <p>
          Si estás interesado en aportar tu granito de arena y colaborar con la
          comunidad podes realizarlo usando{" "}
          <b>
            <a href="https://cafecito.app/aincradlatam" target="_blank">
              Cafesito
            </a>
          </b>{" "}
          si eres de Argentina o{" "}
          <b>
            <a href="https://ko-fi.com/aincradlatam/goal?g=0" target="_blank">
              Ko Fi
            </a>
          </b>{" "}
          si eres de otra parte del mundo.
          <br />
          como gesto de agradecimiento tendras un{" "}
          <span className="text-warning">rango especial </span>en nuestro canal
          de discord y apareceras en nuestro ranking de
          <span className="text-warning"> top donadores.</span>
        </p>
      </div>
    </div>
  );
};
