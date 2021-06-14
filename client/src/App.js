import { Grid } from "@material-ui/core";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./screens/Catalog/Catalog";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleProduct from "./screens/SingleProduct/SingleProduct";

const singleProduct = {
  name: "benazepril hydrochloride",
  description:
    "Hyaluronic Acid is a powerful moisture-binding super ingredient capable of holding 1000x its weight in water. This moisture magnet is natually found in the skin, helping your cells retain as much mositure as possible. The result? Working across multiple layers of the skin, this super serum hydrates your skin, helping it appear plump and smooth, while reducing the appearance of fine lines. Ensuring your skin is hydrated is essential for it to look healthy, making Hyaluronic Acid a must have.",
  price: 90,
  imageUrl:
    "https://images.unsplash.com/photo-1556227834-09f1de7a7d14?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
  ingredients:
    "Aqua, Phenoxyethanol, Caprylyl Glycol, Glycerin, Butylene Glycol, Peg/Ppg/Polybutylene Glycol-8/5/3 Glycerin, Methyl Gluceth-20, Citric Acid, Sodium Hyaluronate (natural origin Hyaluronic Acid), Carbomer, Biosaccharide Gum-1.",
  category: "Lotensin HCT",
  brand: "Niaspan",
  countInStock: 2,
};

function App() {
  return (
    <div className="App">
      <Router>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <Header />
          </Grid>

          <Grid item lg={12} md={12} sm={12}>
            <Switch>
              <Route path="/product/:id" component={SingleProduct} />

              <Route path="/product">
                <Catalog />
              </Route>
            </Switch>
          </Grid>

          <Grid item lg={12} md={12} sm={12}>
            <Footer />
          </Grid>
        </Grid>
      </Router>
    </div>
  );
}

export default App;
