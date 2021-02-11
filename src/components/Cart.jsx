import React from 'react';

export default function Cart({ cart, setCart }) {
  const getTotalSum = () => {
    return cart.reduce(
      (sum, { cost, quantity }) => sum + cost * quantity,
      0
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const setQuantity = (product, amount) => {
    const newCart = [...cart];
    newCart.find(
      (item) => item.name === product.name
    ).quantity = amount;
    setCart(newCart);
  };

  const removeFromCart = (productToRemove) => {
    setCart(
      cart.filter((product) => product !== productToRemove)
    );
  };

  return (
    <>
      <h1>Carrito</h1>
      {cart.length > 0 && (
        <button class="btn btn-secondary"  onClick={clearCart}>Eliminar todo</button>
      )}
      <div className="products">
        {cart.map((product, idx) => (
          <div className="product" key={idx}>
            <h3>{product.name}</h3>
            <h4>${product.cost}</h4>
            <input
              value={product.quantity}
              onChange={(e) =>
                setQuantity(
                  product,
                  parseInt(e.target.value)
                )
              }
            />
            <img src={product.image} alt={product.name} />

            <button class="btn btn-danger" onClick={() => removeFromCart(product)}>
              Eliminar
            </button>
          </div>
        ))}
      </div>

      <div>Total : ${getTotalSum()}</div>
    </>
  );
}
