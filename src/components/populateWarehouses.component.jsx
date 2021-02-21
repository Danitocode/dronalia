import React, { useState } from 'react';

const NORTPALMA = 'NORT PALMA';
const SUDPALMA = 'SUD PALMA';
const WESTPALMA = 'WEST PALMA';




export default function Products() {


  
  const [products] = useState([
    {
      category: 'BEGINNER',
      name: 'Dron Parrot Mambo Fly',
      cost: 60,
      image:
        '/images/drone5.jpg',
        axis: 3,
        size: 50,

        colour: 'Blanco',
        warehouse: NORTPALMA,

    },
    {
      category: 'AMATEUR',
      name: 'Parrot Anafi Drone ',
      cost: 579,
      image:
        '/images/drone6.jpg',
        size: 70,

        axis: 3,
        colour: 'Negro',
        warehouse:SUDPALMA,


    },   
     {
      category: 'AMATEUR',
      name: 'Parrot Anafi Drone ',
      cost: 579,
      image:
        '/images/drone5.jpg',
        size: 70,

        axis: 3,
        colour: 'Negro',
        warehouse:SUDPALMA,


    },

    {
      category: 'PROFESIONAL',
      name: 'Autel Robotic ',
      cost: 1389,
      size: 50,

      image:
        '/images/drone7.jpg',
        axis: 4,
        colour: 'Rojo',
        warehouse: WESTPALMA,


    },
  ]);


  const [warehouse, setWarehouse] = useState(NORTPALMA);

  const getProductsInCategory = () => {
    return products.filter(
      (product) => product.warehouse === warehouse
    );
  };

  return (
    <>
    
      <nav>
            <div onClick={(e) => setWarehouse(e.target.value)} className="nav nav-tabs" id="nav-tab" role="tablist">
              <option value={NORTPALMA} className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Palma Norte</option>
              <option value={SUDPALMA} className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Palma Sur</option>
              <option value={WESTPALMA} className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Palma Oeste</option>
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
              <p className="card-text">Precio : {product.cost}€</p>
            </div>
          </div>
          </div>              


          </div>
        ))}
      </div>
    </>
  );
}







