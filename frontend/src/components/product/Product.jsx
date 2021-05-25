import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../products/productSlice";
import "../product/product.css";
import { motion } from "framer-motion";
import CartPreview from "../cart/CartPreview";

const Product = () => {
  let { id } = useParams();
  let { category } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState();
  const [show, setShow] = useState(false);
  const pageVariants = {
    initial: {
      opacity: 0,
    },
    in: {
      opacity: 1,
      transition: { ease: "easeIn", duration: 0.5 },
    },
    out: {
      opacity: 0,
      transition: { ease: "easeIn", duration: 0.5 },
    },
  };

  useEffect(() => {
    axios.get(`/products/${category}/${id}`).then((res) => {
      setProduct(res.data);
    });
  }, [category, id]);

  const addCart = () => {
    dispatch(addToCart(product));
    setShow(true);
    setTimeout(() => {
      setShow(false);
    }, 3000);
  };

  return (
    <div className="product-info-container">
      {show && (
        <motion.div
          initial="initial"
          animate="in"
          exit="out"
          variants={pageVariants}
        >
          <CartPreview />
        </motion.div>
      )}
      {product && (
        <div className="product-info">
          <div className="img-info-wrapper">
            <motion.div whileHover={{ scale: 1.1 }}>
              <img className="product-info-img" src={product.img} alt="" />
            </motion.div>
          </div>
          <div className="product-info-right-container">
            <div className="product-info-wrapper">
              <p className="sinus-text">Siuns</p>
              <h3 className="product-info-title">{product.title}</h3>
              <h3 className="product-info-price">{product.price}kr</h3>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.4 }}
                className="add-btn"
                onClick={(title) => addCart(title)}
              >
                Add to cart
                {/* <button className="add-btn" onClick={(title) => addCart(title)}>
                  Add to cart
                </button> */}
              </motion.button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Product;
