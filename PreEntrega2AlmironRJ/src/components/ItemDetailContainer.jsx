import React, { useEffect, useState } from "react";
import "./ItemDetailContainer.css";

const ItemDetailContainer = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    setProduct({
      id: "negro1",
      name: "Termo Negro 1",
      description: "Termo color negro con alta capacidad de conservación de temperatura.",
      price: 45,
      image: "/assets/negro1.jpg",
    });
  }, []);

  return (
    <div className="item-detail">
      {product ? (
        <div className="item-detail-content">
          <img src={product.image} alt={product.name} className="item-detail-image" />
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <p className="item-detail-price">${product.price}</p>
          <button className="item-detail-button">Agregar al Carrito</button>
        </div>
      ) : (
        <p>Cargando detalles del producto...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
