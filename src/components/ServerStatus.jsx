import React, { useEffect } from "react";
import { ServerStatusGrid } from "./ServerStatusGrid";
import { ApiRust } from "./hooks/ApiRust";
import { ApiUnturned } from "./hooks/ApiUnturned";

export const ServerStatus = () => {
  const { unturnedData, setUnturnedData, getUnturnedApi } = ApiUnturned();
  const { rustData, setRustData, getRustApi } = ApiRust();

  // Actualiza la fc sin recargar la pagina.
  useEffect(() => {
    getUnturnedApi();
    getRustApi();
  }, []);

  return (
    <>
      <h2 className="mt-5 animate__animated animate__fadeInDown animate__delay-2s text-center">
        Estado del servidor
      </h2>
      <div className="d-flex justify-content-around">
        <hr className="w-25 animate__animated animate__fadeIn animate__delay-2s" />
        <hr className="w-25 animate__animated animate__fadeIn animate__delay-2s" />
      </div>

      <div className="row">
        <div className="col-md-6 d-flex justify-content-center col-sm-12 animate__animated animate__fadeIn animate__delay-2s">
          <table className="table table-borderless text-light text-center mt-3">
              <b className="text-warning">Veloren</b>
            <tbody>
              <tr>
                <td colSpan={2}>Aincrad LATAM</td>
              </tr>
              <tr>
                <td className="px-2">Estado del servidor: <span className="text-success">ONLINE</span> </td>
                
              </tr>
                <tr>
                    <td>IP: veloren.aincradlatam.net</td>
                </tr>
              <tr>
                <td colSpan={2}>Capacidad maxima: <b>60 Jugadores</b></td>
              </tr>

              <tr>
                <td colSpan={2}>Version: aa7cdd2</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col-md-6 d-flex justify-content-center col-sm-12 animate__animated animate__fadeIn animate__delay-2s">
          {unturnedData.map((data) => (
            <ServerStatusGrid key={data.hostname + data.id} {...data} />
          ))}
        </div>
      </div>
    </>
  );
};
