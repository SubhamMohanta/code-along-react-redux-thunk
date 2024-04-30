import axios from "axios";
import { FETCH_DATA } from "./actionType";

const fetchUserData = (data) => {
    return {
        type: FETCH_DATA,
        payload: data,
    };
};

export const FetchData = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
            let users = res.data;
            dispatch(fetchUserData(users));
        });
    };
};