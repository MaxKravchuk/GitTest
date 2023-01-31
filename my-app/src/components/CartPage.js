import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // fetch cart items from local storage or API
    const items = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(items);
    console.log("fasf");
  }, []);

  return (
    <div>
      <h2>Cart Page</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.id}
            <br></br>
            {item.name}
            <br></br>
            {item.description}
          </li>
        ))}
      </ul>
      <Link to="/">Back</Link>
    </div>
  );
};

export default CartPage;
