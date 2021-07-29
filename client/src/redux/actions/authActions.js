import axios from "axios";
import { authApi } from "../../api/authApi";
import * as actionTypes from "../constants/authConstants";

export const signup = (user, history) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.SIGNUP_REQUEST });
    // const data = await authApi.signup(user);
    const data = await axios.post("/user/register",  user );

    if (data.status === 201) {
      dispatch({ type: actionTypes.SIGNUP_SUCCESS });

      const { token, user } = data.data;
      localStorage.setItem("login", true);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: { token, user } });

      history.push('/');
    } else {
      const { errors } = data.errors;
      dispatch({ type: actionTypes.SIGNUP_FAILURE, payload: { errors } });
    }
  } catch (error) {
    const { data } = error.response;
    dispatch({ type: actionTypes.SIGNUP_FAILURE, payload: data });
  }
};

export const login = (user, history) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.LOGIN_REQUEST });

    const data = await axios.post("/user/login", user );

    if (data.status === 200) {
      const { token, user } = data.data;
      console.log(token, user);

      localStorage.setItem("login", true);
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      dispatch({ type: actionTypes.LOGIN_SUCCESS, payload: { token, user } });

      history.push('/');
    } else {
      const { errors } = data.errors;
      dispatch({ type: actionTypes.LOGIN_FAILURE, payload: { errors } });
    }
  } catch (error) {
    const { data } = error.response;
    dispatch({ type: actionTypes.LOGIN_FAILURE, payload: data });
  }
};

export const logout = () => async (dispatch) => {
    dispatch({type: actionTypes.LOGOUT_REQUEST});

    localStorage.clear();
    dispatch({type: actionTypes.LOGOUT_SUCCESS});
    
}