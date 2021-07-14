import React, { useEffect } from "react";
import ProductItem from "./ProductItem/ProductItem";
import useStyles from "./styles";

function Products({props}) {
  const classes = useStyles();
  const { products, loading, error } = props;

  return (
    <div className={classes.root}>
      { loading ? <h2>loading...</h2> : error ? <h2>{error}</h2> : products.map((item, index) => (
        <ProductItem key={index} item={item} />
      ))}
    </div>
  );
}

export default Products;
