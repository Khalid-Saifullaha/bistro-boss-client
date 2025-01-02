import React from "react";

const Cart = () => {
  return (
    <div>
      <div>
        <h2 className="text-6xl">Items: {Cart.length}</h2>
        <h2 className="text-6xl">Total Price: {Cart.length}</h2>
      </div>
    </div>
  );
};

export default Cart;
