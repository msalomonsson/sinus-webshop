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
  }, [category, id]);

  const addCart = () => {
    dispatch(addToCart(product));
  };

  return (
    <div className="product-info-container">
      {product && (
        <div className="product-info">
          <img src={product.img} alt="" />
          <div>
            <h3 className="product-title">{product.title}</h3>
            <h3 className="product-price">{product.price}kr</h3>
            <button className="add-btn" onClick={(title) => addCart(title)}>
              Add to cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
