import React from 'react'
import aincradLogo from '../../public/aincradlogo.png'
export const Footer = () => {
    return (
        <>
        <div className="cardFooter p-5 mt-auto">
            <section className="mb-2 text-secondary row container">
            <div className="col-md-3 col-sm-12">
                <img src={aincradLogo} className="aincradLogoFooter mb-3" alt="logo" />
            </div>
            <div className="col-md-3 col-sm-12 text-center">
                <p>Inicio</p>
                <p>Staff</p>
                <p>Tienda</p>
              
            </div>
            <div className="col-md-3 col-sm-12 text-center">
            <p>Contacto</p>
                <p>FAQ</p>
                <p>Donaciones</p>
            </div>
            <div className="col-md-3 col-sm-12" id="donate">
              <a
                href="https://cafecito.app/aincradlatam"
                rel="noopener"
                target="_blank"
              >
                <img className="w-100"
                  srcSet="https://cdn.cafecito.app/imgs/buttons/button_1.png 1x, https://cdn.cafecito.app/imgs/buttons/button_1_2x.png 2x, https://cdn.cafecito.app/imgs/buttons/button_1_3.75x.png 3.75x"
                  src="https://cdn.cafecito.app/imgs/buttons/button_1.png"
                  alt="Invitame un café en cafecito.app"
                  
                />
              </a>
              <div>
              <a className="btn btn-outline-warning w-100 mt-2" href="https://ko-fi.com/aincradlatam/goal?g=0" target="_blank">Ko-Fi❤️ Donations</a>
              </div>
            </div>
            </section>
            <div className="text-center">
            <span className="text-secondary">Aincrad LATAM Network Todos los derechos reservados © 2022 </span>
            </div>
        </div>
        </>
    )
}

