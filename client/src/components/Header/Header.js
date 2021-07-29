import React, { useState, useEffect } from "react";
import { IconButton, Link, Typography, Menu, MenuItem, Dialog } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import useStyles from "./styles";
import Login from "../Login_Signup/Login/Login";
import Signup from "../Login_Signup/Signup/Signup";
import { Redirect, useLocation } from "react-router-dom";


function Header() {
  const classes = useStyles();
  const [login, setLogin] = useState(JSON.parse(localStorage.getItem('login')));
  const location = useLocation();
  
  console.log("location ", location);
  console.log("login", login);

  useEffect(() => {
    setLogin(JSON.parse(localStorage.getItem('login')));
    
  }, [location])

  return (
    <div className={classes.root}>
      <Typography variant="h4" >
        CRUSHY
      </Typography>

      <Typography className={classes.link}>
        <Link href="#">Home</Link>

        <Link href="/product">Catalog</Link>

        <Link href="#">About</Link>

        <Link href="#">Contact</Link>
      </Typography>

      <div>
        <IconButton>
          <ShoppingCartIcon style={{ color: "black" }} />
        </IconButton>

        <IconButton>
          <FavoriteIcon style={{ color: "black" }} />
        </IconButton>

        { login ? 
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
