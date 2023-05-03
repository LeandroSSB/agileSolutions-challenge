import React from 'react';
import { CategoryProvider } from './category';
import { MarcaProvider } from './marca'; 
import { ProdutoProvider } from './produto';

const Provider = ({ children }) => {


  return (
    <CategoryProvider>
      <MarcaProvider>
        <ProdutoProvider>
          { children }
        </ProdutoProvider>
      </MarcaProvider>
    </CategoryProvider>
  )

}

export default Provider