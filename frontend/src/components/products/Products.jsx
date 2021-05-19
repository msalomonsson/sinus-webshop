import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Products = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div className="products-container">
      <h1 className="big-category-title">All Products</h1>
      {products.map((product, i) => {
        return (
          <div key={i}>
            <h2 className="category-title">{product.category}</h2>

            <div className="products-category-wrapper">
              {product.info.map((info, i) => {
                return (
                  <Link
                    to={`/product/${product.category}/${i}`}
                    key={i}
                    className="link"
                  >
                    <div className="product">
                      <img height="80%" src={info.img} alt="" />
                      <h3 className="product-title">{info.title}</h3>
                      <h3 className="product-price">{info.price} kr</h3>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
