import React, { useEffect, useState } from "react";
import useStyles from "./styles";
import { Button, Grid } from "@material-ui/core";
import axios from "axios";
import ProductItem from "../../components/Products/ProductItem/ProductItem";
import Subscibe from "../../components/Subscribe/Subscibe";

function Home() {
  const classes = useStyles();
  const [topNewProducts, setTopNewProducts] = useState([]);
  const [topNewLaroche, setTopNewLaroche] = useState([]);
  console.log("top new pr", topNewProducts);

  useEffect(() => {
    const getNewProduct = async () => {
      console.log("getnewpr");
      try {
        const newProducts = await axios.get("/product/topnewproducts");
        setTopNewProducts(newProducts.data);

        const topLaroce = await axios.get("/product/topLaroche");
        setTopNewLaroche(topLaroce.data);
      } catch (error) {
        console.log(error);
      }
    };

    getNewProduct();
  }, []);

  return (
    <div className={classes.root}>
      <div className={classes.banner}>
        <div className={classes.textBanner}>
          <h1 className={classes.title}>
            Natural Organic
            <span>
              <br />
              Cosmetics
            </span>
          </h1>
          <p className={classes.description}>Perfect care for your skin</p>
          <Button
            className={classes.catalogButton}
            color="secondary"
            variant="contained"
          >
            Catalog
          </Button>
        </div>
        <img
          src="https://2momart.vn/upload/products/122020/sua-tam-the-body-shop-giup-da-mem-min.png"
          alt="skincare banner"
          className={classes.image}
        />
      </div>

      <div className={classes.main}>
        <h1>New Cosmetics</h1>
        <div className={classes.newProduct}>
          {topNewProducts?.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>

        <div className={classes.sectionGrid}>
          <Grid container>
            <Grid item lg={5}>
              <div className={classes.smallRect}>
                <img
                  src="https://freepikpsd.com/media/2019/11/Avocado_PNG_25283-Transparent-Png-Images.png"
                  alt="avocadp"
                  className={classes.smallImg}
                />
              </div>
            </Grid>
            <Grid item lg={7}>
              <div className={classes.largeRect}>
                <div className={classes.textBanner}>
                  <h2>The best for your hair</h2>
                  <p className={classes.largeText}>
                    It's time to pay attention to your apperance
                  </p>
                  <Button
                    className={classes.catalogButton}
                    color="secondary"
                    variant="contained"
                  >
                    Catalog
                  </Button>
                </div>
                <img
                  src="https://myphamtocnhapkhau.com/upload/products/6edb88b296493b6fd727a6d2a84ac65e.png"
                  alt="hair care"
                  className={classes.largeImg}
                />
              </div>
            </Grid>
          </Grid>
          <Grid container>
            <Grid item lg={7}>
              <div className={classes.largeRect}>
                <div className={classes.textBanner}>
                  <h2>Cosmetics for body</h2>
                  <p className={classes.largeText}>
                    It's time to pay attention to your apperance
                  </p>
                  <Button
                    className={classes.catalogButton}
                    color="secondary"
                    variant="contained"
                  >
                    Catalog
                  </Button>
                </div>
                <img
                  src="https://2momart.vn/upload/products/122020/sua-tam-the-body-shop-giup-da-mem-min.png"
                  alt="body care"
                  className={classes.largeImg}
                />
              </div>
            </Grid>
            <Grid item lg={5}>
              <div className={classes.smallRect}>
                <img
                  src="https://purepng.com/public/uploads/large/purepng.com-orangeorangefruitbitter-orangeorangs-1701527336142gjs07.png"
                  alt="avocadp"
                  className={classes.smallImg}
                />
              </div>
            </Grid>
          </Grid>
        </div>

        <h1>Our New Laroche Posay</h1>
        <div className={classes.newProduct}>
          {topNewLaroche?.map((item, index) => (
            <ProductItem key={index} item={item} />
          ))}
        </div>

        <div className={classes.sectionIntro}>
          <img
            src="https://images.unsplash.com/photo-1566958769312-82cef41d19ef?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=499&q=80"
            alt="skincare"
            className={classes.imgSectionIntro}
          />
          <div className={classes.textSectionIntro}>
            <h1>Elegance what you deserves</h1>
            <p>
              Facials are an elaborate process that includes many steps such as
              cleansers, toners, serums, lotions, and creams, a reward for
              yourself, and of course results after a process of patience.
              Maintain a beautiful and flawless skin.
            </p>
            <p>
              In addition, you should also use skin whitening cream, body lotion
              to take care of the whole body, as well as choose the right
              shampoo for daily hair care. In addition, a perfect healthy body
              also needs the help of personal care products such as toothpaste,
              cleaning solutions and health promotion such as functional foods,
              vitamin pills.
            </p>
          </div>
        </div>
        <div className={classes.sectionIntro}>
          <div className={classes.textSectionIntro}>
            <h1>Be beautiful</h1>
            <p>
              Crushy always respects customers, takes customers' joy and
              satisfaction as motivation, constantly searches for the best
              products so that each customer can become more confident and
              beautiful.
            </p>
            <p>
              Cosmetic brands in Hasaki are always reputable brands, trusted by
              everyone such as: Secret Key, Laneige, Vichy, Avène, Yves Rocher,
              Laroche Posay, Lancôme,... Besides, when buying at Hasaki Hasaki,
              customers always get the best price, fast service and many other
              Promotions
            </p>
          </div>
          <img
            src="https://images.unsplash.com/photo-1629198745421-a7b409ca6d6e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=80"
            alt="skincare"
            className={classes.imgSectionIntro}
          />
        </div>

        <Subscibe />
      </div>
    </div>
  );
}

export default Home;
