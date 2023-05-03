import React, { createContext, useContext, useState } from "react";

/* 
produto = ""
*/

const produtoContext = createContext([])
export const ProdutoProvider = ({ children }) => {
  // populate produtos
  const [ produto, setProduto ] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@agile:produto")) || [{ name: "produto1", marca: "marca1"}, { name: "produto2", marca: "marca2"}, { name: "produto3", marca: "marca3"}];
    return local
  })

  useContext(() => {
    localStorage.setItem("@agile:produto", produto)
  }, [ produto ])

  const addProduto = ({ newProduto }) => {
    if (produto.find( a => a == newProduto )) {
      return alert("produto already exists")
    }
    setProduto([...produto, newProduto])
  }

  const removeProduto = ({ oldProduto }) => {
    if(!produto.find( a => a == oldProduto )){
      return alert('Cannot find produto')
    }
    const newProdutos = produto.filter(a => a != oldProduto)
    setProduto(newProdutos)
  }

  return (
    <produtoContext.Provider value={{ produto, addProduto, removeProduto }}>
      { children }
    </produtoContext.Provider>
  )
}

export const useProduto = () => useContext(produtoContext)