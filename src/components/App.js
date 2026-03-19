import React from 'react'
import { CartProvider } from '../context/CartContext'
import Navbar from './Navbar'
import CartItems from './CartItems';
import "../styles/App.css";


const App = () => {
  return (
    <CartProvider>
        <Navbar />
        <CartItems />
    </CartProvider>
  )
}

export default App
