import React from "react";
import Button from "../components/styled";

const ProductList = (props) => {
  return (
    <div>
      <ul className="product-list">
        {props.products.map((product) => (
          <li key={product.id}>
            <div className="product">
              <a href={"#" + product._id}>
                  <img src={product.image} alt={product.product_name} />
                <p>{product.product_name}</p>
              </a>
              <div className="product-price">
                <div>{"$" + product.price}</div>
                <Button onClick={() => props.addTocart(product)} >Add to Cart</Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
