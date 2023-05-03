import React, { createContext, useContext, useState } from "react";

/* 
category = ""
*/

const categoryContext = createContext([])
export const CategoryProvider = ({ children }) => {
  // populate categories 
  const [ category, setCategory ] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@agile:category")) || ["category1", "category2", "category3"];
    return local
  })

  useContext(() => {
    localStorage.setItem("@agile:category", category)
  }, [ category ])

  const addCategory = ({ newCategory }) => {
    if (category.find( a => a == newCategory )) {
      return alert("category already exists")
    }
    setCategory([...category, newCategory])
  }

  const removeCategory = ({ oldCategory }) => {
    if(!category.find( a => a == oldCategory )){
      return alert('Cannot find category')
    }
    const newCategories = category.filter(a => a != oldCategory)
    setCategory(newCategories)
  }

  return (
    <categoryContext.Provider value={{ category, addCategory, removeCategory }}>
      { children }
    </categoryContext.Provider>
  )
}

export const useCategory = () => useContext(categoryContext)