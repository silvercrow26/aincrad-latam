import React, { useEffect } from 'react'
import { ServerStatusGrid } from './ServerStatusGrid';
import { ApiRust } from './hooks/ApiRust';
import { ApiUnturned } from './hooks/ApiUnturned';


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
                    {rustData.map((data) => (
                        <ServerStatusGrid key={data.id + data.hostname} {...data} />
                    ))}
                </div>

                <div className="col-md-6 d-flex justify-content-center col-sm-12 animate__animated animate__fadeIn animate__delay-2s">
                    {unturnedData.map((data) => (
                        <ServerStatusGrid key={data.hostname + data.id} {...data} />
                    ))}
                </div>
            </div>

        </>
    )
}
