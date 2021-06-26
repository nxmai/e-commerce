import React, { useState } from "react";
import { IconButton, Link, Typography, Menu, MenuItem } from "@material-ui/core";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import FavoriteIcon from "@material-ui/icons/Favorite";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import useStyles from "./styles";

function Header() {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const openAccMenu = Boolean(anchorEl);

  console.log('open', openAccMenu);

  const handleAccClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleAccClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.root}>
      <h1>CRUSHY</h1>

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
            <MenuItem onClick={handleAccClose}> Sign up </MenuItem>
            <MenuItem onClick={handleAccClose}> Login </MenuItem>
          </Menu>

      </div>
    </div>
  );
}

export default Header;
