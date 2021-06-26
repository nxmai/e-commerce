import React from 'react'
import Login from './Login/Login';
import Signup from './Signup/Signup';
import useStyles from "./styles";



function Login_Signup() {
    const classes = useStyles();

    return (
        <div >
            <Signup />
        </div>
    )
}

export default Login_Signup
