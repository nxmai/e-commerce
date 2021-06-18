import React from "react";
import ProductItem from "./ProductItem/ProductItem";
import useStyles from "./styles";

function Products(props) {
  const classes = useStyles();
  const { products } = props;

  return (
    <div className={classes.root}>
      {products.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Products;
