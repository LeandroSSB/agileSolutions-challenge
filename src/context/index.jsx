import React from 'react';
import { CategoryProvider } from './category';

const Provider = ({ children }) => {


  return (
    <CategoryProvider>
      { children }
    </CategoryProvider>
  )

}

export default Provider