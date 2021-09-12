import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid } from "@material-ui/core";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Filter from "../../components/Filter/Filter";
import Products from "../../components/Products/Products";
import useStyles from "./styles";
import Pagination from '@material-ui/lab/Pagination';

import { getProducts as listProducts } from "../../redux/actions/productActions";


function Catalog() {
  const classes = useStyles();
  const [params, setParams] = useState({page: 1});
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const countAllProducts = getProducts.countAllProducts;

  const handlePageChange = (e, value) => {
    if(params.hasOwnProperty('page')){
      setParams({...params, page: value}); 
    } else {
      let tmpParam = { ...params };
      tmpParam.page = value;

      setParams(tmpParam);
    }

  }

  console.log("params", params);
  useEffect(() => {
    dispatch(listProducts(params));
    window.scrollTo( {
      top: 0,
      behavior: "smooth"
    });

  }, [params, dispatch]);


  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item lg={12} md={12} sm={12}>
          <Breadcrumb title="CATALOG" />
        </Grid>

        <Grid container >
          <Grid item lg={3} md={3} sm={3}>
            <Filter params={params} setParams={setParams}/>
          </Grid>

          <Grid item lg={9} md={9} sm={9}>
            <Products props={getProducts}/>

            <div className={classes.paginationRoot}>
              <Pagination className={classes.pagination} count={Math.ceil(countAllProducts/12)} onChange={handlePageChange}/>
            </div>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Catalog;
