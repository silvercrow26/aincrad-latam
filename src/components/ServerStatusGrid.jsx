import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

export const ServerStatusGrid = ({ id, hostname, is_online, players, maxplayers, version }) => {

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

  const redirect = (id) => {

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
          {
            id === '167780' ? (
              <tr>
                <td colSpan={2}>
                  <button className='btn btn-outline-success'>
                    <a target='_blank' className='text-decoration-none text-light' href='https://rust-servers.net/server/167780/'>
                    Vota aquí <br/>
                    ❤️
                    </a>
                  </button>
                </td>
              </tr>

            ):(<tr>
              <td colSpan={2}>
                <button className='btn btn-outline-success'>
                <a target='_blank' className='text-decoration-none text-light' href='https://unturned-servers.net/server/295411/#.Yv2-0g-xIPR.link'>
                  Vota aquí <br/> 
                  ❤️
                </a>     
                </button>
              </td>
            </tr>)
          }

        </tbody>
      </table>
    </div>
  )
};