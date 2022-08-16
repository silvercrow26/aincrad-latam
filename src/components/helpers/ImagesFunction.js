import { useState } from "react";


export const imageFunction =  () => {
    
    const [isHoveringRust, setIsHoveringRust] = useState(false);
    const [isHoveringUnturned, setIsHoveringUnturned] = useState(false);
    
    const imagenRustOver = () => {
        setIsHoveringRust(true)
    }
    
    const imagenRustOut = () => {
        setIsHoveringRust(false)
    }
    
    const imagenUnturnedOver = () => {
        setIsHoveringUnturned(true);
    }
    
    const imagenUnturnedOut = () => {
        setIsHoveringUnturned(false);
    }
    
    return {
        imagenRustOver,
        imagenRustOut,
        imagenUnturnedOver,
        imagenUnturnedOut,
        isHoveringRust,
        isHoveringUnturned,
    }

}