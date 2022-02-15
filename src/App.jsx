import React, { useState, useEffect } from "react";
import { commerce } from "./lib/commerce";

import { Products, Navbar, Cart } from "./components";

const App = () => {
  const [products, setProducts] = useState([]);

  // The cart is an object so its initial state is set to empty object
  const [cart, setCart] = useState({});

  const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };

  // To see what is in the cart
  const fetchCart = async () => {
    setCart(await commerce.cart.retrieve());
  };

  // To add item/products to the cart
  const handleAddToCart = async (productId, quantity) => {
    const item = await commerce.cart.add(productId, quantity);
    setCart(item.cart);
  };

  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, []);

  console.log(cart);

  return (
    <>
      <Navbar totalItems={cart.total_items} />
      {/* <Products products={products} onAddToCart={handleAddToCart} /> */}
      <Cart cart={cart} />
    </>
  );
};

export default App;
