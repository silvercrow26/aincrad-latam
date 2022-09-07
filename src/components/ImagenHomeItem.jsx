import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import { imageFunction } from './helpers/ImagesFunction';

export const ImagenHomeItem = () => {

    const [imageRust, setImageRust] = useState("./rust.gif");
    const [imageRustBanner, setImageRustBanner] = useState("./rustBanner.jpg");
    const [imageUnturned, setimageUnturned] = useState("./unturned.gif");
    const [imageUnturnedBanner, setimageUnturnedBanner] = useState("./unturnedBanner.jpg");

    const {
        imagenRustOver,
        imagenRustOut,
        imagenUnturnedOver,
        imagenUnturnedOut,
        isHoveringRust,
        isHoveringUnturned,
      } = imageFunction();
    
    return (
        <div className="row mt-4">
            <div className="col mb-4 contenedor zoom animate__animated animate__fadeIn animate__delay-1s">
                <Link to="rust">
                    <img
                        role="button"
                        className="img w-75 mx-5"
                        onMouseOut={imagenRustOut}
                        onMouseOver={imagenRustOver}
                        src={isHoveringRust ? imageRustBanner : imageRust}
                    ></img>
                </Link>
            </div>

            <div className="col mb-4 zoom animate__animated animate__fadeIn animate__delay-1s">
                <Link to="unturned">
                    <img
                        role="button"
                        className="img w-75 mx-5"
                        onMouseOut={imagenUnturnedOut}
                        onMouseOver={imagenUnturnedOver}
                        src={isHoveringUnturned ? imageUnturnedBanner : imageUnturned}
                    ></img>
                </Link>
            </div>
        </div>
    )
}
