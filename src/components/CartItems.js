import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartItems = () => {
  // Access cart state and dispatch from CartContext
  const { state, dispatch } = useContext(CartContext);

  // Calculate total amount
  const totalAmount = state.cart.reduce(
    (sum, item) => sum + (item.price * item.quantity),
    0
  );

  // Handle increment quantity
  const handleIncrement = (id) => {
    dispatch({ type: "INCREMENT_QUANTITY", payload: id });
  };

  // Handle decrement quantity
  const handleDecrement = (id) => {
    dispatch({ type: "DECREMENT_QUANTITY", payload: id });
  };

  // Handle remove item from cart
  const handleClearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const handleRemove = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  }

  return (
    <div id="main" style={{ padding: '20px', maxWidth: '800px', margin: '0 auto' }}>
      <h1>Shopping Cart</h1>

      {/* Show message if cart is empty */}
      {state.cart.length === 0 ? (
        <div style={{ fontSize: '18px', color: '#666', marginTop: '20px' }}>
          Cart is currently empty
        </div>
      ) : (
        <>
          {/* Cart items list */}
          <div id="cart-items-list" style={{ marginTop: '20px' }}>
            {state.cart.map((item) => (
              <div
                key={item.id}
                style={{
                  border: '1px solid #ddd',
                  padding: '15px',
                  marginBottom: '15px',
                  borderRadius: '5px'
                }}
              >
                <h3>{item.name}</h3>
                
                {/* Item price */}
                <p>
                  Price: $<span id={`cart-item-price-${item.id}`}>{item.price}</span>
                </p>

                {/* Quantity controls */}
                <div style={{ marginBottom: '10px' }}>
                  <button
                    id={`decrement-btn-${item.id}`}
                    onClick={() => handleDecrement(item.id)}
                    style={{ marginRight: '10px' }}
                  >
                    -
                  </button>
                  <span style={{ marginRight: '10px', marginLeft: '10px' }}>
                    Quantity: {item.quantity}
                  </span>
                  <button
                    id={`increment-btn-${item.id}`}
                    onClick={() => handleIncrement(item.id)}
                    style={{ marginLeft: '10px' }}
                  >
                    +
                  </button>
                </div>

                {/* Item total amount */}
                <p>
                  Amount: $<span id={`cart-amount-${item.id}`}>
                    {item.price * item.quantity}
                  </span>
                </p>

                {/* Remove button */}
                <button
                  id={`cart-item-remove-${item.id}`}
                  onClick={() => handleRemove(item.id)}
                  style={{
                    backgroundColor: '#ff4444',
                    color: 'white',
                    padding: '8px 15px',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: 'pointer'
                  }}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* Clear cart button */}
          <button
            id="clear-all-cart"
            onClick={handleClearCart}
            style={{
              backgroundColor: '#ff6666',
              color: 'white',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              marginTop: '15px',
              fontSize: '16px'
            }}
          >
            Clear Cart
          </button>

          {/* Total amount display */}
          <div
            style={{
              marginTop: '30px',
              fontSize: '20px',
              fontWeight: 'bold',
              borderTop: '2px solid #ddd',
              paddingTop: '20px'
            }}
          >
            Total Cart Amount: $<span id="cart-total-amount">{totalAmount}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CartItems;