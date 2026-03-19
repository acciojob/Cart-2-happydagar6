import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Navbar = () => {
    // Access cart state from Cart
    const { state } = useContext(CartContext);

    // Calculate total items in cart
    const totalItems = state.cart.reduce((sum, item) => sum + item.amount, 0);

    return (
        <nav style={{ padding: "20px", backgroundColor: "#333", color: "white" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <h2>🛒 My Store</h2>
                <div style={{ textAlign: "right" }}>
                    <p style={{ margin: "0 0 10px 0", fontSize: "14px" }}>
                        Using useReducer for state management
                    </p>
                    <div id="nav-cart-item-count" style={{ fontSize: "18px", fontWeight: "bold" }}>
                        {totalItems}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;

// Tell me about what we have done in this file?
// In this file, we have created a Navbar component that displays the name of the store 
// and the total number of items in the cart. We have used the useContext hook to access 
// the cart state from the CartContext. We then calculate the total number of items in 
// the cart by using the reduce method on the cart array, summing up the quantity of 
// each item. Finally, we display this total in the navbar.
