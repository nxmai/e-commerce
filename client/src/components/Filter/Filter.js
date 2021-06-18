import React, { useEffect } from "react";
import { Checkbox, FormControl, FormControlLabel, FormGroup, Radio, RadioGroup } from "@material-ui/core";
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { getBrands as listBrands } from "../../redux/actions/productActions";

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

function Filter({filter, setFilter}) {
  const classes = useStyles();

  const getBrands = useSelector((state) => state.getBrands);
  const { brands, loading, error } = getBrands;

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listBrands())
  }, [dispatch])

  const handleChange = (value, e) => {
    if(e.target.checked){
      setFilter([...filter, value]);
    } else{
      const index = filter.indexOf(value);
      const newArr = filter;
      newArr.splice(index, 1);
      setFilter([...newArr]);
    }
  }

  const handleRadioChange = (value, e) => {
    const newArr = filter;
    var index;
    for(const item of newArr){
      if(item.includes('sort')){
        index = newArr.indexOf(item);
        newArr.splice(index, 1);
        break;
      }
    }
      setFilter([...newArr, value]);
  }

  return (
    <div className={classes.root}>
      <h2>FILTER</h2>

      <h3>CATEGORY</h3>
      <FormGroup>
        {categorys.map((item, index) => (
          <FormControlLabel
            control={<Checkbox />}
            label={item.name}
            key={index}
            onChange={(e) => handleChange(`category=${item.name.split(' ').join('+')}`, e)}
          />
        ))}
      </FormGroup>

      <h3>BRANDS</h3>
      <FormControl>
        {loading
          ? <h2>loading...</h2>
          : error
          ? ""
          : brands ? 
          brands.map((item, index) => (
              <FormControlLabel
                control={<Checkbox />}
                label={item.name}
                key={index}
                
                onChange={(e) => handleChange(`brand=${item.name.split(' ').join('+')}`, e)}
              />
            )) 
          : ""}
      </FormControl>

      <h3>SORT BY</h3>
      <FormControl>
        <RadioGroup>
        {sortBy.map((item, index) => (
          <FormControlLabel
            control={<Radio />}
            label={item.name}
            value={item.name}
            key={index}
            onChange={(e) => handleRadioChange(`sort=${item.value}`, e)}
          />
        ))}
        </RadioGroup>
        
      </FormControl>
    </div>
  );
}

export default Filter;
