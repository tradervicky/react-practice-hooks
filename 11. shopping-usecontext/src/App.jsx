import React from 'react'
import ShoppingCart from './components/ShoppingCart'
import { CartProvider } from './components/ShoppingCartContext'

const App = () => {
  return (
    <CartProvider>
    <div>
      <ShoppingCart/>
    </div>
    </CartProvider>
  )
}

export default App