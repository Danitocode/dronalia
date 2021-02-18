import React, { useState } from 'react';
import Products from '../components/products.component';
import Cart from './cart.component';

const PAGE_PRODUCTS = 'products';
const PAGE_CART = 'cart';

function Presentation() {
  const [cart, setCart] = useState([]);
  const [page, setPage] = useState(PAGE_PRODUCTS);

  const navigateTo = (nextPage) => {
    setPage(nextPage);
  };

  const getCartTotal = () => {
    return cart.reduce(
      (sum, { quantity }) => sum + quantity,
      0
    );
  };

  return (
    <div className="App">
      <header style={ { marginBottom: "25px"} }>
        <div style={ { marginLeft: "25px"} }>
        <button onClick={() => navigateTo(PAGE_CART)} type="button" class="btn btn-primary" style={ { marginRight: "25px"} }>
          Carrito ({getCartTotal()})
        </button>
        <button onClick={() => navigateTo(PAGE_PRODUCTS)} type="button" class="btn btn-secondary">
          Productos disponibles
        </button>

        </div>

      </header>
      {page === PAGE_PRODUCTS && (
        <Products cart={cart} setCart={setCart} />
      )}
      {page === PAGE_CART && (
        <Cart cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default Presentation;
