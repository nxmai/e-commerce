import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Link,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";

function ProductItem({ item }) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea href={`/product/${item._id}`}>
        <CardMedia
          image={item.imageUrl}
          title={item.name}
          className={classes.media}
        />

        <CardContent className={classes.content}>
          <Typography className={classes.nameContent}>{item.name}</Typography>

          <Typography className={classes.priceContent}>
            ${item.price}
          </Typography>
        </CardContent>

        {/* <CardActions className={classes.actionButton}>
                    <IconButton>
                        <AddShoppingCart/>
                    </IconButton>
                </CardActions> */}
        {/* <Link></Link> */}
      </CardActionArea>
    </Card>
  );
}

export default ProductItem;
