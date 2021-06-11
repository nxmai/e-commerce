import React from 'react'
import { IconButton, Link, Typography } from '@material-ui/core';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import FavoriteIcon from '@material-ui/icons/Favorite';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import useStyles from './styles'


function Header() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h1>CRUSHY</h1>

            <Typography className={classes.link}>
                <Link href="#">
                    Home
                </Link>
                
                <Link href="/product">
                    Catalog
                </Link>

                <Link href="#">
                    About
                </Link>

                <Link href="#">
                    Contact
                </Link>
            </Typography>

            <div>
            <IconButton>
                <ShoppingCartIcon style={{color: 'black'}}/>
            </IconButton>

            <IconButton>
                <FavoriteIcon style={{color: 'black'}}/>
            </IconButton>

            <IconButton>
                <AccountCircleIcon style={{color: 'black'}}/>
            </IconButton>
        </div>
        </div>
        
    )
}

export default Header
