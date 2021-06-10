import React from 'react'
import { Grid } from '@material-ui/core';
import Breadcrumb from '../../components/Breadcrumb/Breadcrumb'
import Filter from '../../components/Filter/Filter'
import Footer from '../../components/Footer'
import Header from '../../components/Header/Header'
import Products from '../../components/Products/Products'
import useStyles from './styles'


function Catalog() {
    const classes = useStyles();

    return (
        <div>
            {/* <Header/>
            <Breadcrumb />
            <Filter />
            <Products /> */}

            <Grid container>
                <Grid item lg={12} md={12} sm={12}>
                    <Header />
                </Grid>

                <Grid item lg={12} md={12} sm={12}>
                    <Breadcrumb />
                </Grid>

                <Grid container> 
                    <Grid item lg={3} md={3}>
                        <Filter />
                    </Grid>

                    <Grid item lg={9} >
                        <Products/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Catalog
