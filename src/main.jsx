import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import ProductProvider from './contexts/ProductContext.jsx'
import SidebarProvider from './contexts/SidebarContext.jsx'
import CartContext from './contexts/CartContext.jsx'
import CartProvider from './contexts/CartContext.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  <SidebarProvider>
    <ProductProvider>
      <CartProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </CartProvider>
    </ProductProvider>
  </SidebarProvider>
)
