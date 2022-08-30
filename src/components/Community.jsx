import React from 'react'

export const Community = () => {
    return (
        <>
            <h2 className="animate__animated animate__fadeInDown animate__delay-3s text-center mt-5">
                Comunidad
            </h2>
            <div className="d-flex justify-content-around mb-4">
                <hr className="w-25 animate__animated animate__fadeIn animate__delay-3s" />
                <hr className="w-25 animate__animated animate__fadeIn animate__delay-3s" />
            </div>
            <div className="row animate__animated animate__fadeIn animate__delay-3s">
                <div className="col-md-3 col-sm-12 d-flex justify-content-center">
                    <iframe
                        className=""
                        src="https://discord.com/widget?id=1008984561461510164&theme=dark"
                        width="350"
                        height="500"
                        allowtransparency="true"
                        sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
                    ></iframe>
                </div>
                <div className="col-md-8 col-sm-12 mx-4 mt-2">
                    <b>¡Bienvenidos a la nueva web de Aincrad LATAM!</b>
                   
                    <p>
                        
                        Para la existencia de una comunidad sana debemos colaborar y
                        mantener las normas del servidor.
                    </p>
                    <ol>
                        <li>
                            Trata a todo el mundo con respeto.
                            ✔️
                        </li>
                        <br />
                        <li>
                            No se permite el spam ni la autopromoción (invitaciones a
                            otros servidores, anuncios, etc.) ❌{" "}
                        </li>
                        <br />
                        <li>
                            No se permite contenido NSFW ni obsceno. Esto incluye texto,
                            imágenes o enlaces que presenten desnudos, sexo, violencia u
                            otro tipo de contenido gráfico que pueda herir la sensibilidad
                            del espectador. ❌
                        </li>
                        <br />
                        <li>No se permite Nombres, fotos de perfil o mensajes relacionados con apología al NAZISMO / FASCISMO / SUICIDIOS / RACISMO / HOMOFOBIA / SEXUALES etc. ❌</li>
                        <br />
                        <li>Si ves algo que va en contra de las normas o que no te haga sentir seguro, informa al personal. ¡Queremos que este servidor sea un lugar acogedor! ✔️</li>
                    </ol>
                    <p>Durante los próximos meses estaremos trabajando en mejoras tanto esteticas como funcionales dentro del servidor y la web, ¡esperamos que sean de su agrado! ❤️</p>
                </div>
            </div>
        </>
    )
}
