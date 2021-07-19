import React, { useState, useEffect } from "react";
import { IconButton, Link, Typography, Menu, MenuItem, Dialog } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import useStyles from "./styles";
import Login from "../Login_Signup/Login/Login";
import Signup from "../Login_Signup/Signup/Signup";
import { Redirect } from "react-router-dom";


function Header() {
  const classes = useStyles();
  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);
  const [login, setLogin] = useState(localStorage.getItem('login'));
  // const login = localStorage.getItem('login');
  // console.log('login', login);
  // console.log('header');

  useEffect(() => {
    setLogin(localStorage.getItem('login'));
  }, [localStorage.getItem('login')])

  const handleSignupClose = () => {
    setOpenSignup(false);
  }

  const handleSignupOpen = () => {
    setOpenSignup(true);
  }

  const handleLoginClose = () => {
    setOpenLogin(false);
  }

  

  const handleLoginOpen = () => {
      setOpenLogin(true);
  }

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
          <IconButton onClick={handleLoginOpen}>
            <AccountCircleIcon style={{ color: "black" }} />
          </IconButton>  
      }
        {/* <IconButton onClick={handleLoginOpen}>
          <AccountCircleIcon style={{ color: "black" }} />
        </IconButton> */}

        <Dialog open={openSignup} onClose={handleSignupClose}>
          <Signup handleSignupClose={handleSignupClose} handleLoginOpen={handleLoginOpen} />
        </Dialog>

        <Dialog open={openLogin} onClose={handleLoginClose}>
          <Login handleLoginClose={handleLoginClose} handleSignupOpen={handleSignupOpen}/>
        </Dialog>

      </div>
    </div>
  );
}

export default Header;
