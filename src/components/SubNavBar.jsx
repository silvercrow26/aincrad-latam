import React from 'react'

export const SubNavBar = () => {
    return (
        <>  
        <section className="d-flex justify-content-between container text-light">
            <div className="">
            <p>Usuarios Jugando: <br/> 86 Usuarios <span className="text-success">Online</span></p>
            </div>
            <div className="">
                <h3 className="">AINCRAD LAT<span className=" text-warning">AM NETWORK</span></h3>
            </div>
            <div className="mb-2">
                <span>AINCRA<span className="text-warning">D LATAM</span>/DISCORD</span><br />
                <span>300 Usuarios </span><span className="text-success">Online</span>
            </div>
        </section>
        </>
    )
}
