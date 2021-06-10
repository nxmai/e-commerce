import React from 'react'
import { Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'
import useStyles from './styles'
//fake data
const category = [{
    name: "Body care"
  }, {
    name: "Face care"
  }, {
    name: "Hair care"
  }]

const brand = [{
    name: "Laroche Posay"
  }, {
    name: "Vichy"
  }, {
    name: "The Ordinary"
  }, {
    name: "Lucenbase"
  }]

const sortBy = [{
    name: 'Name'
}, {
    name: 'Price'
}, {
    name: 'Time',
}]



function Filter() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <h2>FILTER</h2>

            <h3>CATEGORY</h3>
            <FormGroup>
                {category.map((item, index) => 
                    <FormControlLabel 
                    control={<Checkbox />}
                    label={item.name}
                    key={index}
                />)}
            </FormGroup>

            <h3>BRANDS</h3>
            <FormGroup>
                {brand.map((item, index) => 
                    <FormControlLabel 
                    control={<Checkbox />}
                    label={item.name}
                    key={index}
                />)}
            </FormGroup>

            <h3>SORT BY</h3>
            <FormGroup>
                {sortBy.map((item, index) => 
                    <FormControlLabel 
                    control={<Checkbox />}
                    label={item.name}
                    key={index}
                />)}
            </FormGroup>

        </div>
    )
}

export default Filter
