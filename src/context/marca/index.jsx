import React, { createContext, useContext, useState } from "react";

// Using a factory to generate examples
const dataFactory = () => {
  return [{name: 'January', vendas: Math.floor(Math.random() * 900)},{name: 'Frebuary', vendas: Math.floor(Math.random() * 900)},
  {name: 'March', vendas: Math.floor(Math.random() * 900)}, {name: 'April', vendas: Math.floor(Math.random() * 900)}, {name: 'May', vendas: Math.floor(Math.random() * 900)},
  {name: 'June', vendas: Math.floor(Math.random() * 900)}, {name: 'July', vendas: Math.floor(Math.random() * 900)}, {name: 'August', vendas: Math.floor(Math.random() * 900)}]
}


const marcaContext = createContext([])
export const MarcaProvider = ({ children }) => {
  // populate marcas
  const [ marca, setMarca ] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@agile:marca")) || [{ name: "marca1", produto: "produto1", data:dataFactory()}, { name: "marca2", produto: "produto2", data:dataFactory()}, { name: "marca3", produto: "produto3", data:dataFactory()}];;
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