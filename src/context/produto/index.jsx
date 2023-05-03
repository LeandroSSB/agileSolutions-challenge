import React, { createContext, useContext, useState } from "react";

// Using a factory to generate examples
const dataFactory = () => {
  return [{name: 'January', vendas: Math.floor(Math.random() * 900)},{name: 'Frebuary', vendas: Math.floor(Math.random() * 900)},
  {name: 'March', vendas: Math.floor(Math.random() * 900)}, {name: 'April', vendas: Math.floor(Math.random() * 900)}, {name: 'May', vendas: Math.floor(Math.random() * 900)},
  {name: 'June', vendas: Math.floor(Math.random() * 900)}, {name: 'July', vendas: Math.floor(Math.random() * 900)}, {name: 'August', vendas: Math.floor(Math.random() * 900)}]
}


const produtoContext = createContext([])
export const ProdutoProvider = ({ children }) => {
  // populate produtos
  const [ produto, setProduto ] = useState(() => {
    const local = JSON.parse(localStorage.getItem("@agile:produto")) || [{ name: "produto1", marca: "marca1", data:dataFactory()}, { name: "produto2", marca: "marca2", data:dataFactory()}, { name: "produto3", marca: "marca3", data:dataFactory()}];
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