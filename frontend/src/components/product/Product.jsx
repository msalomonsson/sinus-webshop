import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
const Product = () => {
  let { id } = useParams();
  let { category } = useParams();

  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`/products/${category}/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, []);

  return (
    <div>
      <h1>This is product detail</h1>
      {product && (
        <h2>
          {product.title} <br /> {product.price}kr
          <br />
          <img src={product.img} alt="" />
        </h2>
      )}
    </div>
  );
};

export default Product;
