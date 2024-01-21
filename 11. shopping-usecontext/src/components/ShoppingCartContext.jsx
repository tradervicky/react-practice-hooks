import { useContext, useReducer } from "react";
import { createContext } from "react"

const initialCartState = {
    cart : []
}
const CartContext = createContext();

const cartReducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_CART":
        return {
          ...state,
          cart: [...state.cart, action.payload],
        };
      case "REMOVE_FROM_CART":
        return {
          ...state,
          cart: state.cart.filter((item) => item.id !== action.payload),
        };
      case "CLEAR_ALL":
        return {
          ...state,
          cart: [],
        };
      default:
        return state;
    }
  };
  

// provider 

export const CartProvider = ({children}) =>{
    const [state, dispatch] = useReducer(cartReducer, initialCartState)
    return (
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}

// custom hook 

export const useCart = ()=>{
    const context = useContext(CartContext)
    return context;
}