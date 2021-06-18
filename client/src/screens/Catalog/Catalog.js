import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import Breadcrumb from "../../components/Breadcrumb/Breadcrumb";
import Filter from "../../components/Filter/Filter";
import Products from "../../components/Products/Products";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";
import Pagination from '@material-ui/lab/Pagination';

import { getProducts as listProducts } from "../../redux/actions/productActions";

function Catalog() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error, countAllProducts } = getProducts;
  
  const [filter, setFilter] = useState([]); //use filter to pass url param to redux thunk file to get data
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(listProducts(filter, page));
  }, [dispatch, filter, page]);

  const handlePageChange = (e, value) => {
    setPage(value);
  }

  return (
    <div>
      <Grid container>
        <Grid item lg={12} md={12} sm={12}>
          <Breadcrumb />
        </Grid>

        <Grid container>
          <Grid item lg={3} md={3} sm={3}>
            <Filter filter={filter} setFilter={setFilter} />
          </Grid>

          <Grid item lg={9} md={9} sm={9}>
            {loading ? (
              <h2>loading...</h2>
            ) : error ? (
              <h2>{error}</h2>
            ) : products ? (
              <Products products={products} />
            ) : (
              " "
            )}

            <div className={classes.paginationRoot}>
                {products ? <Pagination className={classes.pagination} count={Math.ceil(countAllProducts/12)} onChange={handlePageChange}/> : " "}
            </div>
            
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Catalog;
