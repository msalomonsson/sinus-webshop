import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

const Category = () => {
  let { category } = useParams();

  const [products, setProducts] = useState();

  useEffect(() => {
    axios.get(`/products/${category}`).then((res) => {
      setProducts(res.data);
    });
  }, [category]);

  return (
    <div>
      <h1 className="big-category-title">{category}</h1>
      <div className="category-info">
        {products &&
          products.info.map((product, i) => {
            return (
              <Link key={i} to={`/product/${category}/${i}`}>
                <div className="product product-margin">
                  <img height="80%" src={product.img} alt="" />
                  <h3 className="product-title">{product.title}</h3>
                  <h3 className="product-price">{product.price}kr</h3>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default Category;
