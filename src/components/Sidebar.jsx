import React, {useEffect} from 'react'
import { useDocuments } from './hooks/useDocuments'

export const Sidebar = () => {

    const {fetchEventData, eventData} = useDocuments()

    useEffect(() => {
        fetchEventData()
    }, [])


    return (

              <div className="col-md-3 col-sm-12"> 
              {
             eventData.length === 1 ?  eventData.map(({titulo, fecha, hora, servidor}) => (
                    <div className="rounded bg-dark backgroundCard">
                    <h6 className="text-center text-light mt-2"><span className="backgroundEvent">Evento Disponible!</span></h6>
                    <hr className="text-warning" />
                    <div className="container mb-3 text-center">
                    <p className="text-light">{titulo} / {fecha} <br />{hora}  </p>
                    <span className="text-light"></span><span className="text-success"> {servidor}</span>
                    </div>
                   </div>
                  )) : (
                        <div className="rounded bg-dark backgroundCard">
                        <h6 className="text-center text-light mt-2 mb-2 mt-2"><span className="text-light">no hay eventos disponibles.</span></h6>
                       </div> 
                )}

           


            
                            

            


          {/* Minecraft Card */}

           <div className="rounded bg-dark mt-3  backgroundCard">
            <h6 className="text-center text-success mt-3"> ⛏️ Minecraft</h6>
            <hr />
            <div className="container">
            <span className="text-light">IP: minecraft.aincradlatam.net</span>
            <p className="text-light">Online: <span className="text-success">15</span>/200</p>
            </div>
           </div>

          {/* Veloren Card */}
           <div className="rounded bg-dark mt-3  backgroundCard">
            <h6 className="text-center text-warning mt-3"> ⚔️ Veloren</h6>
            <hr />
            <div className="container">
            <span className="text-light">IP:<br /> veloren.aincradlatam.net </span>
            <p className="text-light">Slot Max: <span className="text-success">60</span>/60</p>
            </div>
           </div>

           {/* Discord card */}
            <div className="mt-3">
           <iframe
                        className="dswidget"
                        src="https://discord.com/widget?id=1008984561461510164&theme=dark"
                        width="95%"
                        height="400"
                        allowtransparency="true"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>

            </div>
        </div>
    )
}
