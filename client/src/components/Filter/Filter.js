import React, { useEffect, useState } from "react";
import { FormControl, FormControlLabel, Radio, RadioGroup, Typography, Button, TextField, InputAdornment, IconButton  } from "@material-ui/core";
import useStyles from "./styles";
import SearchIcon from '@material-ui/icons/Search';

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
  const [search, setSearch] = useState('');

  const [categoryCheck, setCategoryCheck] = useState('');  //check and uncheck radio when clear
  const [brandCheck, setBrandCheck] = useState('');
  const [sortCheck, setSortCheck] = useState('');

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
    setCategoryCheck(value);

    if(params.hasOwnProperty('category')){
      setParams({...params, category: value}); 
    } else {
      let tmpParam = { ...params };
      tmpParam.category = value;

      setParams(tmpParam);
    }
  }

  const handleBrandChange = (value, e) => {
    setBrandCheck(value);

    if(params.hasOwnProperty('brand')){
      setParams({...params, brand: value}); 
    } else {
      let tmpParam = { ...params };
      tmpParam.brand = value;

      setParams(tmpParam);
    }
  }

  const handleSortChange = (value, e) => {
    setSortCheck(value);

    if(params.hasOwnProperty('sort')){
      setParams({...params, sort: value}); 
    } else {
      let tmpParam = { ...params };
      tmpParam.sort = value;

      setParams(tmpParam);
    }
  }

  const handleSearch = () => {
    if(params.hasOwnProperty('name')){
      setParams({...params, 'name[regex]': search}); 
    } else {
      let tmpParam = { ...params };
      tmpParam['name[regex]'] = search;

      setParams(tmpParam);
    }
  }

  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleKeyPress = (e) => {
    
    if (e.charCode === 13) {
      handleSearch();
    }
  }
  
  const clearFilter = (value) => {
    if(value == 'category')
      setCategoryCheck('');
    else if (value =='brand')
      setBrandCheck('');
    else if(value == 'sort')
      setSortCheck('');

    if(params.hasOwnProperty(value)){
      let state = {...params};
      state[value] = undefined;
      setParams(state);
    } 
  }

  return (
    <div className={classes.root}>

      <TextField 
        className={classes.searchField}
        fullWidth 
        // variant="outlined"
        size="small"
        placeholder="Search" 
        InputProps={
          {endAdornment: (
            <InputAdornment position="end">
              <IconButton className={classes.searchIcon} onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          )}
        }
        onChange={handleChange}
        onKeyPress={handleKeyPress}
      />

      <Typography variant="h5">
        FILTER
      </Typography>

      <div className={classes.clearButton}>
        <Typography variant="h6"> CATEGORY </Typography>
        <Button onClick={ (e) => clearFilter('category')}> Clear </Button>
      </div>
      

      <FormControl>
        <RadioGroup>
          {categorys.map((item, index) => (
            <FormControlLabel
              control={<Radio />}
              label={item.name}
              key={index}
              value={item.name}
              onChange={(e) => handleCategoryChange(`${item.name}`, e)}
              checked={item.name == categoryCheck}
            />
          ))}
        </RadioGroup>
        
      </FormControl>

      <div className={classes.clearButton}>
        <Typography variant="h6"> BRANDS </Typography>
        <Button onClick={ (e) => clearFilter('brand')}> Clear </Button>
      </div>
      
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
                  checked={item.name == brandCheck}
                />
              )) 
            : ""}
        </RadioGroup>
        
      </FormControl>

      <div className={classes.clearButton}>
        <Typography variant="h6"> SORT BY  </Typography>
        <Button onClick={ (e) => clearFilter('sort')}> Clear </Button>
      </div>
      
      <FormControl>
        <RadioGroup>
        {sortBy.map((item, index) => (
          <FormControlLabel
            control={<Radio />}
            label={item.name}
            value={item.name}
            key={index}
            onChange={(e) => handleSortChange(`${item.value}`, e)}
            checked={item.value == sortCheck}
          />
        ))}
        </RadioGroup>
        
      </FormControl>
    </div>
  );
}

export default Filter;
