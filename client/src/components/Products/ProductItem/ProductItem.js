import React, { Fragment } from 'react'
import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@material-ui/core'
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from './styles'


function ProductItem({item}) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardMedia image={item.imageUrl} title={item.name} className={classes.media}/>
            
            <CardContent className={classes.content}>
                <Typography className={classes.nameContent}>
                    {item.name}
                </Typography>

                <Typography className={classes.priceContent}>
                    ${item.price}
                </Typography>
            </CardContent>

            {/* <CardActions className={classes.actionButton}>
                <IconButton>
                    <AddShoppingCart/>
                </IconButton>
            </CardActions> */}

            
        </Card>
    )
}

export default ProductItem
