import React, { useContext, useState, useEffect } from "react";
import axios from "axios";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import { Button, IconButton } from "@material-ui/core";
import { GlobalState } from "../../GlobalState";
import DeleteIcon from "@material-ui/icons/Delete";

import useStyles from "./styles";

function Cart() {
  const classes = useStyles();

  const state = useContext(GlobalState);
  const [cart, setCart] = state.userAPI.cart;
  const [token] = state.token;

  const [total, setTotal] = useState(0);

  useEffect(() => {
    const getTotal = () => {
      const total = cart.reduce((prev, item) => {
        return prev + item.price * item.quantity;
      }, 0);

      setTotal(total);
    };

    getTotal();
  }, [cart]);

  const addToCart = async (cart) => {
    await axios.patch(
      "https://crushy.herokuapp.com/user/addcart",
      { cart },
      {
        headers: { Authorization: token },
      }
    );
  };

  const handleIncrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity += 1;
      }
    });

    setCart([...cart]);
    addToCart(cart);
  };

  const handleDecrement = (id) => {
    cart.forEach((item) => {
      if (item._id === id) {
        item.quantity === 1 ? (item.quantity = 1) : (item.quantity -= 1);
      }
    });
    setCart([...cart]);
    addToCart(cart);
  };

  const handleRemoveProduct = (id) => {
    if (window.confirm("Do you want to delete this product?")) {
      cart.forEach((item, index) => {
        if (item._id === id) {
          cart.splice(index, 1);
        }
      });

      setCart([...cart]);
      addToCart(cart);
    }
  };

  return (
    <div>
      <Breadcrumb title="SHOPPING CART" />
      <div className={classes.root}>
        <div style={{ marginBottom: "20px" }}>
          {cart.map((product, index) => (
            <div className={classes.productInfo} key={index}>
              <div className={classes.group}>
                <img
                  src={product?.imageUrl}
                  alt={product.name}
                  className={classes.image}
                />
                <div className={classes.textInfo}>
                  <h2>{product?.name}</h2>
                  <p>{product?.description}</p>
                  <h3>${product?.price}</h3>
                </div>
              </div>
              <div className={classes.buttonGroup}>
                <Button
                  onClick={() => handleDecrement(product?._id)}
                  className={classes.countButton}
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                >
                  -
                </Button>
                <h3 className={classes.quantity}> {product?.quantity} </h3>
                <Button
                  onClick={() => handleIncrement(product?._id)}
                  className={classes.countButton}
                  style={{
                    maxWidth: "30px",
                    maxHeight: "30px",
                    minWidth: "30px",
                    minHeight: "30px",
                  }}
                >
                  +
                </Button>
              </div>
              <h2 className={classes.productTotalPrice}>
                {" "}
                ${product?.price * product?.quantity}
              </h2>
              <IconButton onClick={() => handleRemoveProduct(product?._id)}>
                <DeleteIcon style={{ color: "black" }} />
              </IconButton>
            </div>
          ))}
        </div>
        {total === 0 
        ? <h1 style={{marginBottom: '20px'}}>Cart Empty</h1> 
        : ""}
        <hr />
        <div className={classes.total}>
          <h2>Total: </h2>
          <h1 style={{ color: "crimson" }}>${total}</h1>
        </div>
      </div>
    </div>
  );
}

export default Cart;
