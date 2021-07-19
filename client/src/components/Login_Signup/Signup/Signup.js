import React, { useEffect, useRef, useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import useStyles from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { signup } from "../../../redux/actions/authActions";



function Signup({handleSignupClose, handleLoginOpen}) {
  const classes = useStyles();
  const [user, setUser] = useState({
    name: '', email: '', password: '', cfpassword: ''
  });
  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);
  const [errors, setErrors] = useState({name: '', email: '', password: '', cfpassword: ''});
  const [flag, setFlag] = useState(false);

  const serverError = auth.error;

  useEffect(() => {
    
  }, [errors])

  const handleOnclick = () => {
    handleSignupClose();
    handleLoginOpen(); 
  }

  const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
  const validateForm = (errors) => {
    let valid = true;
    Object.values(errors).forEach(
      (val) => val.length > 0 && (valid = false)
    );

    if(user.name.length == 0){
      valid = false
      errors.name = 'Name must not be empty!';
    } 
    if(!validEmailRegex.test(user.email)){
      valid = false
      errors.email = 'Email is not valid!';
    }
    if(user.password.length < 6){
      valid = false
      errors.password = 'Password must be 6 characters long!';
    }
    if(user.cfpassword != user.password || user.cfpassword == ""){
      valid = false
      errors.cfpassword = 'Confirm password is not match';
    }
    setErrors({...errors})

    return valid;
  }

  const onInputChange = (e) => {
    const {name, value} = e.target;
    setUser({...user, [name]: value});

    switch (name) {
      case 'name': 
        errors.name = 
          value.length == 0
            ? 'Name must not be empty!'
            : '';
        break;
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
      case 'cfpassword':
        errors.cfpassword = 
          (user.password !== value)  //use value instead cfpassword because after setuser, we trigger Signup re render, its doesnot set immediately
          ? 'Confirm password is not match'
          : ''
      default:
        break;
    }

    // setErrors({...errors, [name]: value});
  }

  
  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    if(validateForm(errors)){
      setFlag(true);
      dispatch(signup(user));
    } 
  }


  return (
    <Container component="main" maxWidth="xs" >
      {/* <CssBaseline /> */}
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <form className={classes.form} noValidate onSubmit={handleSignupSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Full Name"
                name="name"
                autoComplete="name"
                onChange={onInputChange}
                error = { errors.name ? true : flag ? (serverError?.name ? true : false) : false }
                helperText={errors.name ? errors.name : flag ? serverError?.name : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={onInputChange}
                error = { errors.email ? true : flag ? (serverError?.email ? true : false) : false }
                helperText={errors.email ? errors.email : flag ? serverError?.email : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onInputChange}
                error = { errors.password ? true : flag ? (serverError?.password ? true : false) : false }
                helperText= { errors.password ? errors.password : flag ? serverError?.password : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="cfpassword"
                label="Confirm password"
                type="password"
                id="cfpassword"
                autoComplete="current-password"
                onChange={onInputChange}
                error = { errors.cfpassword ? true : false }
                helperText= { errors.cfpassword }

              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign Up
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick={handleOnclick} style={{cursor: "pointer"}}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

export default Signup;
