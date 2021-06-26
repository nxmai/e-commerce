import React, { useState } from "react";
import { IconButton, Link, Typography, Menu, MenuItem, Dialog } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

import useStyles from "./styles";
import Login from "../Login_Signup/Login/Login";
import Signup from "../Login_Signup/Signup/Signup";

function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const openAccMenu = Boolean(anchorEl);

  const [openLogin, setOpenLogin] = useState(false);
  const [openSignup, setOpenSignup] = useState(false);

  const handleAccClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccClose = () => {
    setAnchorEl(null);
  };

  const handleSignupClose = () => {
    setOpenSignup(false);
  }

  const handleSignupOpen = () => {
    handleAccClose();
    setOpenSignup(true);
  }

  const handleLoginClose = () => {
    setOpenLogin(false);
  }

  const handleLoginOpen = () => {
    handleAccClose();
    setOpenLogin(true);
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5">
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

        <IconButton onClick={handleAccClick}>
          <AccountCircleIcon style={{ color: "black" }} />

          
        </IconButton>

        <Menu open={openAccMenu} anchorEl={anchorEl} onClose={handleAccClose} keepMounted>
            <MenuItem onClick={handleSignupOpen}> Sign up </MenuItem>
            <MenuItem onClick={handleLoginOpen}> Login </MenuItem>
        </Menu>

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
