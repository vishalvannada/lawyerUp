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