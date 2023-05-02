import React, { createContext, useContext, useState } from "react";


const categoryContext = createContext([])
export const CategoryProvider = ({ children }) => {
  const [ category, setCategory ] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@agile:category")) || []
    return local
  })

  useContext(() => {
    localStorage.setItem("@agile:category", category)
  }, [ category ])

  const addCategory = ( category ) => {

  }

 
  return (
    <categoryContext.Provider value={{ category }}>
      { children }
    </categoryContext.Provider>
  )
}

export const useCategory = () => useContext(categoryContext)