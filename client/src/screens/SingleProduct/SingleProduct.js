import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import {
  Button, IconButton, Tab, Tabs } from "@material-ui/core";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import productApi from "../../api/productApi";


//import SwipeableViews from "react-swipeable-views";

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div>
//       {value === index && (
//         <p>{children}</p>
//       )}
//     </div>
//   );
// }

function SingleProduct({match}) {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [quantity, setQuantity] = useState(0);

  const [product, setProduct] = useState([]);

  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getSingleProduct(match.params.id);
        setProduct(response.data);

      } catch(error) {
        console.log('Failed to load product list', error);
      }
    }
     
    fetchProductList();
  }, [])

  const handleChangeTab = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity >= 1) setQuantity(quantity - 1);
  };

  //   const handleChangeIndex = (index) => {
  //     setSelectedTab(index);
  //   };

  return (
    <div className={classes.root}>
      <div className={classes.product}>
        <div>
          <img className={classes.image} src={product.imageUrl} alt={product.name}></img>
        </div>

        <div className={classes.information}>
          <h1 className={classes.name}>{product.name}</h1>
          <h2>${product.price}</h2>

          <Tabs
            value={selectedTab}
            onChange={handleChangeTab}
            className={classes.tabs}
            indicatorColor="primary"
          >
            <Tab label="Description" />
            <Tab label="Ingredients" />
            <Tab label="Application" />
          </Tabs>

          {selectedTab === 0 && (
            <div className={classes.description}>
              <p style={{ textAlign: "justify" }}>{product.description}</p>
              <h4 style={{ marginTop: '40px'}}>Quantity</h4>

              <div className={classes.buttonGroup}>
                <Button onClick={handleDecrement} className={classes.countButton} style={{maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px'}}>-</Button>
                <h4 className={classes.quantity}> {quantity} </h4>
                <Button onClick={handleIncrement} className={classes.countButton} style={{maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px'}}>+</Button>

              </div>

              <div >
                <Button className={classes.addToCartButton} color="secondary" variant="contained">Add to cart</Button>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <p style={{ textAlign: "justify" }}>{product.ingredients}</p>
          )}

          {selectedTab === 2 && <p>application</p>}

          {/* <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={selectedTab}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={selectedTab} index={0} dir={theme.direction}>
              {product.description}
            </TabPanel>
            <TabPanel value={selectedTab} index={1} dir={theme.direction}>
              {product.ingredients}
            </TabPanel>
          </SwipeableViews> */}
        </div>
      </div>
      
    </div>
  );
}

export default SingleProduct;
