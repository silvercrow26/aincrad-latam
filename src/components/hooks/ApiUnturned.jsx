import React, { useState } from 'react'

export const ApiUnturned = () => {
 
    //Uso de clausula o palabra reservada, para usar la variable global ubicada en .env 
    const URLunturned = "DH6lNdg5WncdwzSmAjB6f6CdE43yWEmiv1w"; 
    const url = `https://unturned-servers.net/api/?object=servers&element=detail&key=${URLunturned}`;
    
    const [unturnedData, setUnturnedData] = useState([{}]);

    const getUnturnedApi = async() => {    
        const request = await fetch(url);
        const response = await request.json();

        setUnturnedData([response]);
    }



  return {
      unturnedData,
      setUnturnedData,
      getUnturnedApi
  }
}
