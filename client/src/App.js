import { Grid } from "@material-ui/core";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Catalog from "./screens/Catalog/Catalog";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SingleProduct from "./screens/SingleProduct/SingleProduct";


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
