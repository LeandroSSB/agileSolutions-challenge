import React, { createContext, useContext, useState } from "react";

/* 
marca = ""
*/

const marcaContext = createContext([])
export const MarcaProvider = ({ children }) => {
  // populate marcas
  const [ marca, setMarca ] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@agile:marca")) || [{ name: "marca1", category: "category1"}, { name: "marca2", category: "category2"}, { name: "marca3", category: "category3"}];
    return local
  })

  useContext(() => {
    localStorage.setItem("@agile:marca", marca)
  }, [ marca ])

  const addMarca = ({ newMarca }) => {
    if (marca.find( a => a == newMarca )) {
      return alert("marca already exists")
    }
    setMarca([...marca, newMarca])
  }

  const removeMarca = ({ oldMarca }) => {
    if(!marca.find( a => a == oldMarca )){
      return alert('Cannot find marca')
    }
    const newMarcas = marca.filter(a => a != oldMarca)
    setMarca(newMarcas)
  }

  return (
    <marcaContext.Provider value={{ marca, addMarca, removeMarca }}>
      { children }
    </marcaContext.Provider>
  )
}

export const useMarca = () => useContext(marcaContext)