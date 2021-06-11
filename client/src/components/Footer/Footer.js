import React from 'react'
import { Container, Icon, IconButton, Link } from '@material-ui/core'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import useStyles from './styles'


function Footer() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.logo}>
                <h1>CRUSHY</h1>
            </div>

            <div className={classes.faq}>
                <h3>INFORMATION AND FAQ</h3>
                <Link href="#">Shipping and Payment</Link>
                <Link href="#">Track orders</Link>
            </div>

            <div className={classes.about}>
                <h3>ABOUT</h3>
                <Link href="#">Our Crushy</Link>
                <Link href="#">Magazines</Link>
            </div>

            <div>
                <h3>CONTACT</h3>
                <div className={classes.iconText}>
                   <Icon className={classes.icon}><LocationOnIcon/></Icon> 
                   <p>District 3, HCMC, Viet Nam</p>
                </div>
                <div className={classes.iconText}>
                    <Icon className={classes.icon}><PhoneIcon /></Icon>
                    <p>(+84) 000 111 22</p>
                </div>
                <div className={classes.iconText}>
                    <Icon className={classes.icon}><MailIcon /></Icon>
                    <p>crushy@gmail.com</p>
                </div>
            </div>

            <div>
                <h3>FOLLOW US</h3>
                <IconButton><InstagramIcon /></IconButton>
                <IconButton><FacebookIcon /></IconButton>
            </div>
        </div>
    )
}

export default Footer
