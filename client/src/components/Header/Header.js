import React, { useEffect, useContext, useState } from "react";
import { IconButton, Link, Typography } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import useStyles from "./styles";
import { Redirect, useLocation } from "react-router-dom";

import { GlobalState } from "../../GlobalState";


function Header() {
  const classes = useStyles();

  const state = useContext(GlobalState);
  const [isLogged] = state.userAPI.isLogged;
  const [cart] = state.userAPI.cart;

  const location = useLocation();
  
  useEffect(() => {
    
  }, [location])

  return (
    <div className={classes.root}>
      <Typography variant="h4" className={classes.crushy}>
        <Link href="/"> CRUSHY </Link>
      </Typography>

      <Typography className={classes.link}>
        <Link href="/">Home</Link>

        <Link href="/product">Catalog</Link>

        <Link href="#">About</Link>

        <Link href="#">Contact</Link>
      </Typography>

      <div className={classes.iconGroup}>
        {/* {isLogged ? "Welcome" : ""} */}

        {isLogged ? 
        <div className={classes.cartIcon}>
          <span className={classes.iconSpan}>{cart.length}</span>
          <IconButton href="/cart">
            <ShoppingCartIcon style={{ color: "black" }} />
          </IconButton>
        </div>
        : ""
        }

        {isLogged ? 
        <IconButton>
          <FavoriteIcon style={{ color: "black" }} />
        </IconButton>
        : ""}
        
        { isLogged ? 
          <IconButton href="/user/infor">
            <AccountCircleIcon style={{ color: "black" }} />
          </IconButton>
        : 
          <IconButton href="/auth">
            <AccountCircleIcon style={{ color: "black" }} />
          </IconButton>  
      }
      </div>
    </div>
  );
}

export default Header;
