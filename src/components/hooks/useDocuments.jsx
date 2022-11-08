import { useContext } from "react";
import { DocsContext } from "../../firebase/context/DocsContext";

export const useDocuments = () => {
  const {
    state: {
      data,
      setData,
      editing,
      setEditing,
      currentData,
      setCurrentData,
      publicacionIndividual,
      setPublicacionIndividual,
      eventData,
    },
    actions: {
      fetchData,
      handleDelete,
      handleEditPublication,
      getOnePublication,
      fetchEventData,
      handleEventDelete,


    },
  } = useContext(DocsContext);

  return {
    data,
    setData,
    fetchData,
    handleDelete,
    handleEditPublication,
    editing,
    setEditing,
    currentData,
    setCurrentData,
    publicacionIndividual,
    setPublicacionIndividual,
    getOnePublication,
    fetchEventData,
    eventData,
    handleEventDelete,
  };
};
