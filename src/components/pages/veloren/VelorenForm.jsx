import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2"
import { useAuth } from '../../../firebase/context/AuthContext'

export const VelorenForm = () => {

    //form states
    const [tabla, setTabla] = useState([])
    const [userId, setUserId] = useState('')
    const [nickname, setNickname] = useState('')
    const [nivel, setNivel] = useState('')
    const [discord, setDiscord] = useState('')
    const [fecha, setFecha] = useState('')
    const [pueblo, setPueblo] = useState('Tremburg')

    //Context
    const {user} = useAuth();
    console.log(user.uid);



    //submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        
        axios.get('https://sheet.best/api/sheets/33a27dce-5302-4b16-865e-a05867f5b4b2').then(
            (response) => {
                setTabla([response, ...tabla]);
                // console.log(response);
                // const userduplicado = data.filter(
                //      (resp) => { resp.UserId == user.uid })

                // console.log(userduplicado);

                const userDetected = tabla.find((id) => id === tabla.UserId)

                // console.log(userDetected);
                
                if (userDetected) {
                    alert('ya existe.')
                } else {

                    const data = {
                        UserId: userId,
                        Nickname: nickname,
                        Nivel: nivel,
                        Discord: discord,
                        Fecha: fecha,
                        Pueblo: pueblo,
                    }
            
                    axios.post('https://sheet.best/api/sheets/33a27dce-5302-4b16-865e-a05867f5b4b2', data).then((response) => {
                        Swal.fire("Gracias por participar", "Tu registro a sido enviado con exito!", "success");
                        setNickname('')
                        setNivel('')
                        setDiscord('')
                        setPueblo('')
                    })
                }
                // console.log(response);
            }
        )

    }

    const d = new Date();
    const datestring = d.getDate() + "-" + (d.getMonth() + 1) + "-" + d.getFullYear() + " " +
        d.getHours() + ":" + d.getMinutes();


    const mostrarFecha = () => {
        setFecha(datestring)
    }

    const mostrarId = () => {
        setUserId(user.uid)
    }

    console.log(fecha);

    useEffect(() => {
        mostrarFecha();
        mostrarId();
    }, [])

    return (

        <div className='container text-light text-center'>
            <video className="" autoPlay loop muted>
                <source src="../../background.mp4" type="video/mp4"></source>
            </video>

            <h1 className='text-light'>Bienvenidos al 1° Torneo del Poder</h1>
            <hr />
            <form autoComplete='off' onSubmit={handleSubmit}>
                <div className="form-row inscripciones-container">

                  

                    <div className="input-group w-75 my-2 col-sm-12">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nickname:</span>
                        <input type="text" required className="form-control w-50 border-warning p-2" id="inputNickname" placeholder="Nickname"
                            onChange={(e) => setNickname(e.target.value)}
                            value={nickname}
                        />
                    </div>

                    <div className="input-group my-2 w-75 col-sm-12">
                        <span className="input-group-text" id="inputGroup-sizing-default">Nivel:</span>
                        <input type="number" required className="form-control w-50 border-warning p-2" id="inputNivel" placeholder="Nivel de combate"
                            onChange={(e) => setNivel(e.target.value)}
                            value={nivel}
                        />
                    </div>

                    <div className="input-group my-2 w-75 col-sm-12">
                        <span className="input-group-text" id="inputGroup-sizing-default">Discord:</span>
                        <input type="text" required className="form-control border-warning p-2" id="inputDiscord" placeholder="Discord#0000"
                            onChange={(e) => setDiscord(e.target.value)}
                            value={discord}
                        />
                    </div>

                    <div className="input-group my-2 w-75 col-sm-12">
                        <span className="input-group-text" id="inputGroup-sizing-default">Fecha:</span>
                        <input type="text" disabled required className="form-control border-warning p-2 " id="inputFecha"
                            onChange={mostrarFecha}
                            value={fecha}
                        />

                    </div>

                    <div className="input-group my-2 w-75 col-sm-12">
                        <span className="input-group-text" id="inputGroup-sizing-default">Pueblo:</span>
                        <select required className='form-control border-warning p-2' for="inputPueblo"
                            onChange={(e) => setPueblo(e.target.value)}
                            value={pueblo}

                        >
                            <option>Tremburg</option>
                            <option>Taton</option>
                            <option>Abaven</option>
                        </select>
                    </div>
                    <div className="input-group w-75 my-2 col-sm-12">
                        <span className="input-group-text" id="inputGroup-sizing-default">ID:</span>
                        <input type="text" required disabled className="form-control w-50 border-warning p-2" id="inputNickname"
                            onChange={mostrarId}
                            value={userId}
                        />
                    </div>

                    <button type="submit" className="buttonRegister w-75 my-2">Inscribirse</button>
                </div>
            </form>

        </div>
    )
}
