import { createContext, useContext, useState} from "react";
import Swal from 'sweetalert2'
import axios from 'axios';
export const DocsContext = createContext();


export const DocsProvider = ({children}) =>  {
    const context = useContext(DocsContext)
      const [data, setData] = useState([]);
      const [editing, setEditing] = useState(false);
      const [currentData, setCurrentData] = useState({
        titulo: "",
        fecha: "",
        publicacion: "",
        creador: "",
      })
      const [publicacionIndividual, setPublicacionIndividual] = useState([])
      const [eventData, setEventData] = useState([])

      const URLpublicaciones = import.meta.env.VITE_APP_PUBLICATION_URL; 
      const URLeventos = import.meta.env.VITE_APP_EVENT_URL;
    const fetchData = async() => {
      try{ 
        const res = await axios.get(URLpublicaciones)
        setData(res.data)

      }catch(error){
        console.log(error)
      }
    }
    
      const handleEditPublication = (item) => {
        setEditing(true)
          setCurrentData({
            titulo: item.titulo,
            fecha: item.fecha,
            publicacion: item.publicacion,
            creador: item.creador,
            _id: item._id,
          })
      }  


      const getOnePublication = async(id) => {
        const res = await axios.get(`${URLpublicaciones}/${id}`)
        setPublicacionIndividual(res.data)
      }


      const handleDelete = async(id) => {
        try{
          
          Swal.fire({
            title: 'Estas seguro de eliminar la publicación?',
            text: "una vez realizado no podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#198819',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, borrar'
          }).then(async (result) => {
            if (result.isConfirmed) {
              const res = await axios.delete(`${URLpublicaciones}/${id}`)
            const newPublication = data.filter(item => item._id !== id)
            setData(newPublication)
              Swal.fire(
                'Eliminado!',
                'La publicación ha sido eliminada',
                'success'
                )
          }
        })
        }catch(error){
          console.log(error)
        }
      }



      const fetchEventData = async() => {
        const res = await axios.get(URLeventos)
        setEventData(res.data)
      }

      const handleEventDelete = (id) => {
        try{
          
          Swal.fire({
            title: 'Estas seguro de eliminar el evento?',
            text: "una vez realizado no podras revertir esto!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#198819',
            cancelButtonColor: '#d33',
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Si, borrar'
          }).then(async (result) => {
            if (result.isConfirmed) {
              const res = await axios.delete(`${URLeventos}/${id}`)
            const newEvent = eventData.filter(item => item._id !== id)
            setEventData(newEvent)
              Swal.fire(
                'Elminado!',
                'El evento ha sido eliminado',
                'success'
                )
          }
        })
        }catch(error){
          console.log(error)
        }
      }

      
      const state = {
        data,
        setData,
        editing,
        setEditing,
        currentData,
        setCurrentData,
        publicacionIndividual,
        setPublicacionIndividual,
        eventData,
    }
    
    const actions = {
        fetchData,
        handleDelete,
        handleEditPublication,
        getOnePublication,
        fetchEventData,
        handleEventDelete,


    }

    return <DocsContext.Provider value={{state, actions}}>{children}</DocsContext.Provider>
}