import React, { useEffect, useState } from "react";
import productos from "../../data/products.json";

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  //Este effect se ejecuta cuando se monta el componente
  useEffect(() => {
    const promesa = new Promise((acc, rec) => {
      setTimeout(() => {
        acc(productos);
      }, 3000);
    });

    promesa
      .then((result) => {
        setProducts(result);
      })
      .catch((err) => {
        alert("Hubo un error");
      });
  }, []);

  console.log(products);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
