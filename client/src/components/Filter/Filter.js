import React, { useEffect, useState } from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup, Typography } from "@material-ui/core";
import useStyles from "./styles";

import productApi from "../../api/productApi";

//use default for category and sort
const categorys = [
  {
    name: "Body care",
  },
  {
    name: "Face care",
  },
  {
    name: "Hair care",
  },
];

const sortBy = [
  {
    name: "Name (A-Z)",
    value: "name"
  },
  {
    name: "Name (Z-A)",
    value:"-name"
  },
  {
    name: "Lowest -> Highest",
    value: "price"
  },
  {
    name: "Highest -> Lowest",
    value:"-price"
  },
  {
    name: "Newest",
    value:"creatAt"
  },
  {
    name: "Oldest",
    value: "-createAt"
  },
];

function Filter({params, setParams}) {
  const classes = useStyles();

  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const fetchBrandList = async () => {
      try {
        const response = await productApi.getBrand();
        setBrands(response);
      } catch(error) {
        console.log('Failed to load brand list', error);
      }
    }
     
    fetchBrandList();
  }, [])

  const handleCategoryChange = (value, e) => {
    if(params.hasOwnProperty('category')){
      setParams({...params, category: value}); 
    } else {
      let tmpParam = { ...params };
      tmpParam.category = value;

      setParams(tmpParam);
    }
  }

  const handleBrandChange = (value, e) => {
    if(params.hasOwnProperty('brand')){
      setParams({...params, brand: value}); 
    } else {
      let tmpParam = { ...params };
      tmpParam.brand = value;

      setParams(tmpParam);
    }
  }

  const handleSortChange = (value, e) => {
    if(params.hasOwnProperty('sort')){
      setParams({...params, sort: value}); 
    } else {
      let tmpParam = { ...params };
      tmpParam.sort = value;

      setParams(tmpParam);
    }
  }


  return (
    <div className={classes.root}>
      <Typography variant="h5">
        FILTER
      </Typography>

      <Typography variant="h6">
      CATEGORY
      </Typography>

      <FormControl>
        <RadioGroup>
          {categorys.map((item, index) => (
            <FormControlLabel
              control={<Radio />}
              label={item.name}
              key={index}
              value={item.name}
              onChange={(e) => handleCategoryChange(`${item.name}`, e)}
            />
          ))}
        </RadioGroup>
        
      </FormControl>


      <Typography variant="h6">
        BRANDS
      </Typography>
      <FormControl>
        <RadioGroup>
          { brands ? 
            brands.map((item, index) => (
                <FormControlLabel
                  control={<Radio />}
                  label={item.name}
                  key={index}
                  value={item.name}
                  onChange={(e) => handleBrandChange(`${item.name}`, e)}
                />
              )) 
            : ""}
        </RadioGroup>
        
      </FormControl>


      <Typography variant="h6">
        SORT BY
      </Typography>
      <FormControl>
        <RadioGroup>
        {sortBy.map((item, index) => (
          <FormControlLabel
            control={<Radio />}
            label={item.name}
            value={item.name}
            key={index}
            onChange={(e) => handleSortChange(`${item.value}`, e)}
          />
        ))}
        </RadioGroup>
        
      </FormControl>
    </div>
  );
}

export default Filter;
