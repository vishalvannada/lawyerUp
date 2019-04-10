import axios from "axios";
import setAuthToken from "../utils/setAuthToken";

export const checkAuth = (userData, history) => dispatch => {
    console.log(localStorage.getItem('jwtToken'));
    setAuthToken(localStorage.getItem('jwtToken'));
    axios
        .get("http://localhost:3001/users/list", userData)
        .then(res => {})
        .catch(err =>
            dispatch({
                type: 'Auth',
                payload: err.response.data
            })
        );
};

export const saveAvailability = (userData, history) => dispatch => {
    console.log(localStorage.getItem('jwtToken'));
    setAuthToken(localStorage.getItem('jwtToken'));
    axios
        .post("http://localhost:3001/availability", userData)
        .then(res => {})
        .catch(err =>
            dispatch({
                type: 'Auth',
                payload: err.response.data
            })
        );
};

export const getAvailability = (userData, history) => dispatch => {
    console.log(userData);
    console.log(localStorage.getItem('jwtToken'));
    setAuthToken(localStorage.getItem('jwtToken'));
    axios
        .get("http://localhost:3001/availability", {params : {email : userData}})
        .then(res => {
            console.log(res);

            dispatch({
                type: 'GET_AVAIL',
                payload: res.data
            })
        })
        .catch(err =>
            dispatch({
                type: 'Auth',
                payload: err.response
            })
        );
}