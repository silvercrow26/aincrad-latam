import React, { useEffect, useState } from 'react'

export const ServerStatusGrid = ({ hostname, is_online, players, maxplayers, version }) => {

  const [status, setStatus] = useState('')
  const [classStatus, setClassStatus] = useState('')

  const serverStatus = () => {
    if (is_online === '1') {
      setClassStatus('text-success');
      setStatus('ONLINE');
    } else {
      setClassStatus('text-danger')
      setStatus('OFFLINE');
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
            <td className={classStatus}> {status}</td>      
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