import axios from 'axios';
import { returnErrors } from "./errorActions";

import {USER_LOADED,USER_LOADING,AUTH_ERROR,
    LOGGIN_FAIL,LOGGIN_SUCCESS,LOGOUT_SUCCESS,
    REGISTER_FAIL,REGISTER_SUCCESS} from "./types";

//Check token & load user

export const loadUser = () => (dispatch,getState) => {
    //user loading
    dispatch({ type: USER_LOADING });

    axios.get('api/auth/user', tokenConfig(getState))
    .then(res => dispatch({
        type: USER_LOADED,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status));
        dispatch({ type:AUTH_ERROR })
    });
}


//Register User
export const register = ({ name, email, password }) => (dispatch) =>{
    //Headers
    const config = {
        headers: {
            'Content-Type' : "application/json"
        }
    }

    //Request body
    const body = JSON.stringify({ name , email , password });

    axios.post('/api/users', body, config)
    .then(res => dispatch({
        type: REGISTER_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, "REGISTER_FAIL"));
        dispatch({
            type: REGISTER_FAIL
        });
    })
};

//Login user
export const login = ({ email, password }) => (dispatch) =>{
    //Headers
    const config = {
        headers: {'Content-Type' : "application/json"}}

    //Request body
    const body = JSON.stringify({ email , password });

    axios.post('/api/auth', body, config)
    .then(res => dispatch({
        type: LOGGIN_SUCCESS,
        payload: res.data
    }))
    .catch(err => {
        dispatch(returnErrors(err.response.data, err.response.status, "LOGIN_FAIL"));
        dispatch({
            type: LOGGIN_FAIL
        });
    })
};

//Logout user
export const logout = () => {
    return{
        type: LOGOUT_SUCCESS
    };
}


//Setup config/headers and token
export const tokenConfig = (getState) => {

//get token from local storage
const token = getState().auth.token;

//headers
const config = {
    headers: {
        "Content-type": "application/json"
    }
}

//if token, add to headers
if (token) {
    config.headers['x-auth-token'] = token;
}

return config;
}