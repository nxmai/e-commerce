import React, { useState } from "react";
import useStyles from "./styles";
import {
  Button,
  ButtonGroup,
  IconButton,
  Tab,
  Tabs,
  useTheme,
} from "@material-ui/core";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

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

function SingleProduct({ item }) {
  const classes = useStyles();
  const [selectedTab, setSelectedTab] = useState(0);
  const [quantity, setQuantity] = useState(0);
  //const theme = useTheme();

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
          <img className={classes.image} src={item.imageUrl}></img>
        </div>

        <div className={classes.information}>
          <h1 className={classes.name}>{item.name}</h1>
          <h2>${item.price}</h2>

          <Tabs
            value={selectedTab}
            onChange={handleChangeTab}
            className={classes.tabs}
          >
            <Tab label="Description" />
            <Tab label="Ingredients" />
            <Tab label="Application" />
          </Tabs>

          {selectedTab === 0 && (
            <div className={classes.description}>
              <p style={{ textAlign: "justify" }}>{item.description}</p>
              <h4 style={{ marginTop: '40px'}}>Quantity</h4>

              <div className={classes.buttonGroup}>
                <Button onClick={handleIncrement} className={classes.countButton} style={{maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px'}}>+</Button>
                <h4 className={classes.quantity}> {quantity} </h4>
                <Button onClick={handleDecrement} className={classes.countButton} style={{maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px'}}>-</Button>
              </div>

              <div >
                <Button className={classes.addToCartButton}>Add to cart</Button>
                <IconButton>
                  <FavoriteBorderIcon />
                </IconButton>
              </div>
            </div>
          )}
          {selectedTab === 1 && (
            <p style={{ textAlign: "justify" }}>{item.ingredients}</p>
          )}

          {selectedTab === 2 && <p>application</p>}

          {/* <SwipeableViews
            axis={theme.direction === "rtl" ? "x-reverse" : "x"}
            index={selectedTab}
            onChangeIndex={handleChangeIndex}
          >
            <TabPanel value={selectedTab} index={0} dir={theme.direction}>
              {item.description}
            </TabPanel>
            <TabPanel value={selectedTab} index={1} dir={theme.direction}>
              {item.ingredients}
            </TabPanel>
          </SwipeableViews> */}
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
