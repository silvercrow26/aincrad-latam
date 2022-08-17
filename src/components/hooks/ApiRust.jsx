import React, { useEffect, useState } from 'react'

export const ApiRust = () => {

    const URLrust = "m9eVFDTwe9go4nI8Zq2hNJsYjM1r66klMTC"; 
    const url = `https://rust-servers.net/api/?object=servers&element=detail&key=${URLrust}`;
    
    const [rustData, setRustData] = useState([{}]);

    const getRustApi = async() => {    
        const request = await fetch(url);
        const response = await request.json();
        setRustData([response]);
    }  

  return {
    rustData,
    setRustData,
    getRustApi
  }
}
