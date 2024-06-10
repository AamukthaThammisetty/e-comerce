import React ,{createContext,useContext, useEffect} from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
export const ProductContext=createContext();
const ProductProvider = ({children}) => {
  const [products,setProducts]=useState([]);
  useEffect (()=>{
      const fetchProducts=async()=>{
        const response= await fetch("https://fakestoreapi.com/products");
        const data=await response.json();
      }
  },[])
  return (
  <ProductContext.Provider>
    {children}
  </ProductContext.Provider>
  );
};

export default ProductProvider;
