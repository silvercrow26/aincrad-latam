import React, { useEffect, useState } from 'react'

export const RustStatusItem = ({ hostname, is_online, players, maxplayers, version }) => {

    const [rustStatus, setRustStatus] = useState('')
    const [rustClassStatus, setRustClassStatus] = useState('')

    const serverStatus = () => {
        if (is_online === '1') {
            setRustClassStatus('text-success');
            setRustStatus('ONLINE');
        } else {
            setRustClassStatus('text-danger')
            setRustStatus('OFFLINE');
        }
    }

    useEffect(() => {
        serverStatus();
    }, []);


    return (
        <div>
            <table className="table table-borderless text-light text-center mt-3">
                <tbody>

                    <tr>
                        <td colSpan={2}>{hostname}</td>
                    </tr>

                    <tr>
                        <td className='px-2'>Estado del servidor: </td>
                        <td className={rustClassStatus}> {rustStatus}</td>
                    </tr>

                    <tr>
                        <td colSpan={2}>Jugadores: {players}/{maxplayers}</td>
                    </tr>

                    <tr>
                        <td colSpan={2}>Version: {version}</td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
};
