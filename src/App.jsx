import React from "react"
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./pages/Home"
import ProductDetails from "./pages/ProductDetails"
import Sidebar from "./components/Sidebar"
import Product from "./components/Product"
import Hero from "./components/Hero"
import Header from "./components/Header"
import Footer from "./components/Footer"
export default function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path ="/product/:id" element={<ProductDetails/>}/>
      </Routes>
      <Sidebar/>
      <Footer/>
    </Router>
  )
}
