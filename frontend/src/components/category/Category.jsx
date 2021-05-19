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
      console.log("this is category");
    });
  }, [category]);

  return (
    <div>
      <h1>This is {category}</h1>
      <ul className="products">
        {products &&
          products.info.map((product, i) => {
            return (
              <Link key={i} to={`/product/${category}/${i}`}>
                <li className="product">
                  <img src={product.img} alt="" />
                  <h1>{product.title}</h1>
                  <h1>{product.price}kr</h1>
                </li>
              </Link>
            );
          })}
      </ul>
    </div>
  );
};

export default Category;
