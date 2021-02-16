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



      <div className="container">

      <div className="tab-content" id="nav-tabContent">
      <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
        

      <div className="row">
        
      <h1>Carrito</h1>
            {cart.length > 0 && (
              <button class="btn btn-secondary"  onClick={clearCart} style={ { margin: "25px"} }>Eliminar todo</button>
            )}
            <div className="card-deck mb-3 text-center py-3" >
              {cart.map((product, idx) => (
                <div className="product" key={idx}>

                <div className="product"  style={ { marginBottom: "25px"} }>
                  <div className="card">
                    <img src={product.image} className="card-img-top" alt={product.name} width="100" height="100"/>
                    <div className="card-body">
                      <h5 className="card-title">{product.name}</h5>
                      <p className="card-text">Eje : {product.axis}</p>
                      <p className="card-text">Medida : {product.size}</p>
                      <p className="card-text">Color : {product.colour}</p>
                      <p className="card-text">Precio : {product.cost}€</p>
                      <input
                    value={product.quantity}
                    onChange={(e) =>
                      setQuantity(
                        product,
                        parseInt(e.target.value)
                      )
                    }
                  />

                  <button class="btn btn-danger" onClick={() => removeFromCart(product)} style={ { marginTop: "25px"} }>
                    Eliminar
                  </button>
                    </div>
                  </div>
                </div>              


                </div>
              ))}
            </div>

            <div>Total : ${getTotalSum()}</div>
      </div>


      </div>








      </div>
      </div>
    </>
  );
}
