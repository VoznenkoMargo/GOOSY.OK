/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from "react";
import CartItemContainer from "../../components/CartItemContainer/CartItemContainer";

function CartPage() {

  const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        (async () => {
            try {
                const response = await fetch(
                    "http://35.180.205.240:5000/api/products"
                ).then((e) => e.json());
                setCartItems(response.slice(0, 2));
            } catch (e) {
                console.error(e)
            }
        })();
    }, []);

  return (
    <section>
      <CartItemContainer cartItems={cartItems} />
    </section>
  );
}

export default CartPage;
