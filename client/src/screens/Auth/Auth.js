import React, { useState } from 'react'
import Login from '../../components/Login_Signup/Login/Login'
import Signup from '../../components/Login_Signup/Signup/Signup';

import useStyles from "./styles";


function Auth() {
    const classes = useStyles();
    const [login, setLogin] = useState(true);
    return (
        <div className={classes.root}>

            {login 
            ? <Login setLogin={setLogin} />
            : <Signup setLogin={setLogin} />
            }
            
        </div>
    )
}

export default Auth
