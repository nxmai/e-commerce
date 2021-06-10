import React from 'react'
import { Typography } from '@material-ui/core'
import useStyles from './styles'

function Breadcrumb() {
    const classes = useStyles();
    return (
        <div className={classes.root}> 
            <div></div>
            <Typography style={{fontSize: '30px', fontWeight: 'bold'}}>
                CATALOG
            </Typography>
        </div>
    )
}

export default Breadcrumb
