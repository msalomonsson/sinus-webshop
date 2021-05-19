import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../products/productSlice";
const Product = () => {
  let { id } = useParams();
  let { category } = useParams();
  const dispatch = useDispatch();

  const [product, setProduct] = useState();

  useEffect(() => {
    axios.get(`/products/${category}/${id}`).then((res) => {
      setProduct(res.data);
      console.log("this is product");
    });
  }, []);

  const addCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div>
      <h1>This is product detail</h1>
      {product && (
        <h2>
          {product.title} <br /> {product.price}kr
          <button onClick={addCart}>Buy </button>
          <br />
          <img src={product.img} alt="" />
        </h2>
      )}
    </div>
  );
};

export default Product;
