import React from 'react'
import silvercrou from '../../../public/silvercrou.jpg'
import defendzor from '../../../public/defenzor.jpg'
import fega from '../../../public/fega.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Staff = () => {
    return (
        <>
                <div className="headerStaff p-3 mt-3">
                    <h3 className="text-warning text-center display-5">STAFF</h3>
                </div>
            <div className="container ">
                <div className="p-5 mb-5 d-flex justify-content-center container flex-wrap">
                    <div className="mx-5 backgroundCard p-3 mb-3 staffCard" >
                    <img src={silvercrou} alt="silvercrow" />
                    <p className="text-light text-center mt-2">Silvercrow</p>
                    <span  className="text-light text-center mx-3"><a className="text-decoration-none " href="https://www.instagram.com/frxstmourne/?hl=es-la" target="_blank">@frxstmourne</a></span>
                    <p className="text-center text-danger"><b>Owner</b></p>
                    <p className="text-light text-center">DevOps Operations</p>
                    </div>
 
                    <div className="mx-5 backgroundCard p-3 mb-3 staffCard">
                    <img src={defendzor} alt="defendzor" />
                    <p className="text-light text-center mt-2">DEFEND</p>
                    <span  className="text-light text-center mx-5"><a className="text-decoration-none" href="https://www.instagram.com/z4myk/?hl=es-la" target="_blank">@z4myk</a></span>
                    <p className="text-center text-danger"><b>Co-Owner</b></p>
                    <p className="text-light text-center">Full Stack Developer</p>
                    </div>

                    <div className="mx-5 backgroundCard p-3 mb-3 staffCard">
                    <img  className="fegaCard" src={fega} alt="jukergan" />
                    <p className="text-light text-center mt-2">Jukergan</p>
                    <span  className="text-light text-center mx-5"><a className="text-decoration-none" href="https://www.twitch.tv/jukergan" target="_blank">@jukergan</a></span>
                    <p className="text-center text-danger"><b>Head Admin</b></p>
                    <p className="text-light text-center">Designer <br /> Content Creator</p>
                    </div>
                </div>
            </div>
        </>
    )
}
