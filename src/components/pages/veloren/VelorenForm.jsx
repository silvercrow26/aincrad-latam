import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2"
import { useAuth } from '../../../firebase/context/AuthContext'

export const VelorenForm = () => {

    //form states
    const [userId, setUserId] = useState('')
    const [nickname, setNickname] = useState('')
    const [nivel, setNivel] = useState('')
    const [discord, setDiscord] = useState('')
    const [fecha, setFecha] = useState('')
    const [pueblo, setPueblo] = useState('Tremburg')
    const [carta, setCarta] = useState('../../carta_escrita.png')

    //Context
    const { user } = useAuth();

    //submit event
    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get('https://sheet.best/api/sheets/fbf0c6e0-7b21-44eb-98fe-999c0f0ed9d7').then(
            ({ data }) => {
                const userDuplicado = data.find(resp => resp.UserId === user.uid)
                if (userDuplicado) {
                    Swal.fire("Inscripción denegada", "Esta cuenta ya está registrada.", "error");
                } else if (data.length >= 20) {
                    Swal.fire("Inscripción denegada", "Se llego al cupo maximo de inscriptos", "error");
                } else {
                    const data = {
                        UserId: userId,
                        Nickname: nickname,
                        Nivel: nivel,
                        Discord: discord,
                        Fecha: fecha,
                        Pueblo: pueblo,
                    }
                    axios.post('https://sheet.best/api/sheets/fbf0c6e0-7b21-44eb-98fe-999c0f0ed9d7', data).then((response) => {
                        Swal.fire("Gracias por participar", "Tu registro a sido enviado con exito!", "success");
                        setNickname('')
                        setNivel('')
                        setDiscord('')
                    })
                }
                console.log(data)
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

    useEffect(() => {
        mostrarFecha();
        mostrarId();
    }, [])

    return (

        <div className='container text-light'>
            <video className="" autoPlay loop muted>
                <source src="../../background.mp4" type="video/mp4"></source>
            </video>

            <div className='detail-event d-flex'>
                <h1 className='text-light mt-3 mb-4 title-container animate__animated animate__fadeIn animate__delay-1s'>Bienvenidos al 1° Torneo del Poder</h1>
                <img className='animate__animated animate__fadeIn animate__delay-2s' src={carta} />
                <h4 className='title-container animate__animated animate__fadeIn animate__delay-2s'>Detalles del evento:</h4>
                <ul className='animate__animated animate__fadeIn animate__delay-2s'>
                    <li>Los participantes se enfrentarán 1 vs 1 en la arena con un arma melee a elección.</li>
                    <li>El arma será proporcionada por el encargado.</li>
                    <li>Los combates estarán separados por categorías (nivel de combate).</li>
                    <li>Los participantes deberán pagar su respectiva inscripción el día del evento.</li>
                    <li>Las inscripciones varían de acuerdo a la categoría del participante.</li>
                    <li>Las armas que empujen fuera de la arena como el martillo estarán deshabilitadas.</li>
                    <li>Las pociones estarán limitadas a un máximo de 3.</li>
                    <li>La armadura a utilizar será proporcionada por los administradores.</li>
                    <li>El pago de la inscripción será recibido por el encargado.</li>
                    <li>Los espectadores podrán observar el combate desde las gradas.</li>
                    <li>Los espectadores tienen prohibido realizar ataques de ningún tipo.</li>
                    <li>El comercio/ventas podrán ser llevadas a cabo antes y después de cada combate.</li>
                    <li>Las apuestas estarán habilitadas antes de cada combate.</li>
                    <li>Las apuestas serán llevadas a cabo por un encargado.</li>
                    <li>Los espectadores tienen prohibido escalar o saltar hacia la arena.</li>
                    <li>Las apuestas serán llevadas a cabo por un encargado.</li>
                </ul>
                <p className='detail-final animate__animated animate__fadeIn animate__delay-2s'>Los detalles del evento pueden variar durante el transcurso de la semana, por lo que deberán estar atentos a los cambios.
                    Es importante que el formulario de inscripción sea rellenado a consciencia, es decir, deberán proporcionar los datos correctamente, ya que el día del evento se revisarán estos datos y si algo no cuadra, pueden ser descalificados por proporcionar información errónea.
                    <br/></p>
                    <span className='text-danger animate__animated animate__fadeIn animate__delay-2s'>Quienes incumplan con lo establecido serán sancionados o descalificados del evento.</span>

            </div>
            <div className="d-flex justify-content-around mb-4">
                    <hr className="w-25 animate__animated animate__fadeIn animate__delay-3s" />
                    <hr className="w-25 animate__animated animate__fadeIn animate__delay-3s" />
                </div>
          

            <form className='animate__animated animate__fadeIn animate__delay-3s' autoComplete='off' onSubmit={handleSubmit}>
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
                        <input type="number" required className="form-control w-50 border-warning p-2" id="inputNivel" placeholder="Nivel de combate general"
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
                        <select required className='form-control border-warning p-2'
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
