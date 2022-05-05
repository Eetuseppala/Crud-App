/* eslint-disable import/no-anonymous-default-export */

import { FETCH_ALL, POST, UPDATE, DELETE } from "../constants/actionTypes";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_ALL:
            return action.payload;
        case POST:
            return [...state, action.payload];
        case UPDATE:
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        case DELETE:
            return state.filter((post) => post._id !== action.payload);
        default:
            return state;
    }
}

//state = posts