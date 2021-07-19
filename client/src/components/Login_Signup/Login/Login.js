import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import useStyles from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { login } from "../../../redux/actions/authActions";


function Login({handleLoginClose, handleSignupOpen}) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [user, setUser] = useState({
      email: '', password: '',
    })
    const [errors, setErrors] = useState({email: '', password: ''});
    const auth = useSelector(state => state.auth);
    const serverError = auth.error;
    const [flag, setFlag] = useState(false);

    useEffect(() => {
    
    }, [errors])

    const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
    const validateForm = (errors) => {
      let valid = true;
      Object.values(errors).forEach(
        (val) => val.length > 0 && (valid = false)
      );

      if(!validEmailRegex.test(user.email)){
        valid = false
        errors.email = 'Email is not valid!';
      }
      if(user.password.length < 6){
        valid = false
        errors.password = 'Password must be 6 characters long!';
      }
      setErrors({...errors})

      return valid;
    }

    const onInputChange = (e) => {
      const {name, value} = e.target;
      setUser({...user, [name]: value});

      switch (name) {
        case 'email': 
          errors.email = 
            validEmailRegex.test(value)
              ? ''
              : 'Email is not valid!';
          break;
        case 'password': 
          errors.password = 
            value.length < 6
              ? 'Password must be 6 characters long!'
              : '';
          break;
        default:
          break;
      }
    }

    const handleOnclick = () => {
      handleLoginClose();
      handleSignupOpen(); 
    }

    
    const handleSubmit = (e) => {
      e.preventDefault();
    if(validateForm(errors)){
      setFlag(true);
      dispatch(login(user));
      handleLoginClose();
    } 

    }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSubmit}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onInputChange}
            error = { errors.email ? true : flag ? (serverError?.email ? true : false) : false }
            helperText={errors.email ? errors.email : flag ? serverError?.email : ''}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange = {onInputChange}
            error = { errors.password ? true : flag ? (serverError?.password ? true : false) : false }
            helperText= { errors.password ? errors.password : flag ? serverError?.password : ''}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link variant="body2" onClick={handleOnclick} style={{cursor: "pointer"}}>
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      
    </Container>
  );
}

export default Login;
