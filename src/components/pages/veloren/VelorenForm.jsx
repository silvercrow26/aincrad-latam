import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2"
import { useAuth } from '../../../firebase/context/AuthContext'

export const VelorenForm = () => {

    //form states
    const [userId, setUserId] = useState('')
    const [nickname, setNickname] = useState('')
    const [email, setEmail] = useState('')
    const [discord, setDiscord] = useState('')
    const [pago, setPago] = useState('')
    const [fecha, setFecha] = useState('')
    const [carta, setCarta] = useState('../../carta_escrita.png')

    //Context
    const { user } = useAuth();

    //submit event
    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            axios.get('https://sheet.best/api/sheets/b59e892c-34b0-4c66-99b4-7395ef46140c').then(
                ({ data }) => {
                    const userDuplicado = data.find(resp => resp.UserId === user.uid)
                    if (userDuplicado) {
                        Swal.fire("Inscripción denegada", "Esta cuenta ya está registrada.", "error");
                    } else if (data.length >= 50) {
                        Swal.fire("Inscripción denegada", "Se llego al cupo maximo de inscriptos", "error");
                    } else {
                        const data = {
                            UserId: userId,
                            Nickname: nickname,
                            Email: email,
                            Discord: discord,
                            Pago: pago,
                            Fecha: fecha,
                        }
                        axios.post('https://sheet.best/api/sheets/b59e892c-34b0-4c66-99b4-7395ef46140c', data).then((response) => {
                            Swal.fire("Gracias por participar", "Tu registro a sido enviado con exito!", "success");
                            setNickname('')
                            setNivel('')
                            setDiscord('')
                        })
                    }
                }
                
                )
            }catch(error){
                console.log(error.response)
        }
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
                <h1 className='text-light mt-3 mb-4 title-container animate__animated animate__fadeIn animate__delay-1s'>Apertura de servidor V.I.P Aincrad Latam Network 60slots</h1>
                <h4 className='title-container animate__animated animate__fadeIn animate__delay-2s'>Detalles de la compra:</h4>
                <ul className='animate__animated animate__fadeIn animate__delay-2s'>
                    <li>El precio del V.I.P es de <b>3 USD </b></li>
                    <li><b>La duración del V.I.P</b> es de <span className="text-danger">30 Días</span> dependiendo el sistema de pago.</li>
                    <li>La compra se puede efectuar vía <span className="text-primary">Paypal</span></li>
                    <li>Vía Ko Fi donations, de este metodo la duración del V.I.P es de <span className="text-danger">45 Días</span> <b>ya que el minimo de donación es de 5USD</b></li>
                    <li>Si eres de argentina, podes abonar por Mercado Pago con un costo de $600 Pesos Argentinos</li>

                </ul>
                <p className='detail-final animate__animated animate__fadeIn animate__delay-2s'>La apertura del servidor es el 24/09
                    <br/></p>
                    <b className=' animate__animated animate__fadeIn animate__delay-2s'>Si queres ser participe de este servidor, te invitamos a que llenes el formulario y en breve un administrador se contactara contigo para poder efectuar el pago del mismo.</b>

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
                        <span className="input-group-text" id="inputGroup-sizing-default">Email:</span>
                        <input type="email" required className="form-control w-50 border-warning p-2" id="inputNivel" placeholder="Ingrese su Email"
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
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
                        <span className="input-group-text" id="inputGroup-sizing-default">Sistema de pago:</span>
                        <input type="text" required className="form-control border-warning p-2" id="inputDiscord" placeholder="Paypal, Ko Fi o Mercadopago"
                            onChange={(e) => setPago(e.target.value)}
                            value={pago}
                        />
                    </div>

                    <div className="input-group my-2 w-75 col-sm-12">
                        <span className="input-group-text" id="inputGroup-sizing-default">Fecha:</span>
                        <input type="text" disabled required className="form-control border-warning p-2 " id="inputFecha"
                            onChange={mostrarFecha}
                            value={fecha}
                        />

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
