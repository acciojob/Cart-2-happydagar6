import React, { createContext, useReducer } from "react";

// Create a context for the cart
export const CartContext = createContext();

// Define the initial state of the cart
const initialState = {
  cart: [
    { id: 1, name: "Laptop", price: 1000, quantity: 1 },
    { id: 2, name: "Phone", price: 500, quantity: 2 },
    { id: 3, name: "Tablet", price: 300, quantity: 1 },
  ],
};

// Reducer function to manage cart state
const cartReducer = (state, action) => {
  // What are state and action inside reducer function?
  // state is the current state of the cart, which is an object containing the cart array.
  // action is an object that describes the type of action to be performed and any additional data needed for that action. It typically has a 'type' property that indicates the type of action (e.g., 'ADD_TO_CART', 'REMOVE_FROM_CART') and may have other properties that provide necessary data for the action (e.g., product details, quantity).

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
        // Why we have done item.id !== action.payload here?
        // We have done item.id !== action.payload here to remove the item with
        // the specified id from the cart. The filter method creates a new array
        // that includes only the items whose id does not match the id provided
        // in the action payload. This effectively removes the item with that id
        // from the cart.
        // What else can we do to remove the item from the cart?
        // Another way to remove the item from the cart is to use the splice method.
        // We can find the index of the item with the specified id and then use
        // splice to remove it from the cart array. However, using filter is often
        // more concise and easier to read for this purpose.
      };
    case "INCREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        ),
      };
    case "DECREMENT_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? { ...item, quantity: item.quantity - 1 }
            : item,
        ),
      };

    case "CLEAR_CART":
        return {
            ...state,
            cart: [],
        };
    default:
      return state;
  }

};

export const CartProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    )
};

