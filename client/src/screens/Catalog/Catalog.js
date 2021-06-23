import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Filter from "../../components/Filter/Filter";
import Products from "../../components/Products/Products";
import useStyles from "./styles";
import Pagination from '@material-ui/lab/Pagination';

import productApi from "../../api/productApi";

function Catalog() {
  const classes = useStyles();
  const [countAllProducts, setCountAllProducts] = useState();
  const [params, setParams] = useState({page: 1});


  const handlePageChange = (e, value) => {
    if(params.hasOwnProperty('page')){
      setParams({...params, page: value}); 
    } else {
      let tmpParam = { ...params };
      tmpParam.page = value;

      setParams(tmpParam);
    }

  }

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAll(params);
        setProducts(response.products);
        setCountAllProducts(response.countAllProducts);

      } catch(error) {
        console.log('Failed to load product list', error);
      }
    }
     
    fetchProductList();
  }, [params])


  return (
    <div>
      <Grid container>
        <Grid item lg={12} md={12} sm={12}>
          <Breadcrumb />
        </Grid>

        <Grid container>
          <Grid item lg={3} md={3} sm={3}>
            <Filter params={params} setParams={setParams} />
          </Grid>

          <Grid item lg={9} md={9} sm={9}>
            <Products products={products} />

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
