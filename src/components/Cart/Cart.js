import React from "react";
import Classes from "./Cart.module.css";

const Cart = (props) => {
  const cartItems = (
    <ul className={Classes['cart-items']}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <div>
      {cartItems}
          <div className={Classes.total}>
              <span>Total Amount</span>
              <span>35.62</span>
      </div>
          <div className={Classes.actions}>
              <button className={Classes['button--alt']}>Close</button>
              <button className={Classes.button}>Order</button>
          </div>
    </div>
  );
};

export default Cart;
