import React, { useState } from 'react';

const BEGINNER = 'home and garden';
const AMATEUR = 'utility';
const PROFESIONAL = 'profesional';




export default function Products({ setCart, cart }) {


  
  const [products] = useState([
    {
      category: BEGINNER,
      name: 'Dron Parrot Mambo Fly',
      cost: 60,
      image:
        '/images/drone5.jpg',
        axis: 3,
        colour: 'Blanco',
    },
    {
      category: AMATEUR,
      name: 'Parrot Anafi Drone ',
      cost: 579,
      image:
        '/images/drone6.jpg',
        axis: 3,
        colour: 'Negro',

    },
    {
      category: PROFESIONAL,
      name: 'Autel Robotic ',
      cost: 1389,
      image:
        '/images/drone7.jpg',
        axis: 4,
        colour: 'Rojo',

    },
  ]);

  const addToCart = (product) => {
    let newCart = [...cart];
    let itemInCart = newCart.find(
      (item) => product.name === item.name
    );
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      itemInCart = {
        ...product,
        quantity: 1,
      };
      newCart.push(itemInCart);
    }
    setCart(newCart);
  };

  const [category, setCategory] = useState(BEGINNER);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.category === category
    );
  };

  return (
    <>
    
      <nav>
            <div onClick={(e) => setCategory(e.target.value)} className="nav nav-tabs" id="nav-tab" role="tablist">
              <option value={BEGINNER} className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Principiantes</option>
              <option value={AMATEUR} className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Aficionados</option>
              <option value={PROFESIONAL} className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Profesionales</option>
            </div>
          </nav>
      <div className="products">
        {getProductsInCategory().map((product, idx) => (
          <div className="product" key={idx}>

          <div className="col-md-3 col-lg-3 col-xs-3"  style={ { marginBottom: "25px"} }>
          <div className="card">
            <img src={product.image} className="card-img-top" alt={product.name} width="100" height="100"/>
            <div className="card-body">
              <h5 className="card-title">{product.name}</h5>
              <p className="card-text">Eje : {product.axis}</p>
              <p className="card-text">Medida : {product.size}</p>
              <p className="card-text">Color : {product.colour}</p>
              <p className="card-text">Precio : {product.price}€</p>
              <button type="button" className="btn btn-primary" onClick={() => addToCart(product)}>Comprar</button>
            </div>
          </div>
          </div>              


          </div>
        ))}
      </div>
    </>
  );
}







