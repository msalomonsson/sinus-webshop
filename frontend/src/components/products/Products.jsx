import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Products = () => {
  const { products } = useSelector((state) => state.products);

  return (
    <div>
      <h1>Products</h1>
      {products.map((product, i) => {
        return (
          <ul key={i}>
            <h2>{product.category}</h2>
            {product.info.map((info, i) => {
              return (
                <Link to={`/product/${product.category}/${i}`} key={i}>
                  <li className="product">
                    <img src={info.img} alt="" />
                    <h2>{info.title}</h2>
                    <h2>{info.price} kr</h2>
                  </li>
                </Link>
              );
            })}
          </ul>
        );
      })}
    </div>
  );
};

export default Products;
