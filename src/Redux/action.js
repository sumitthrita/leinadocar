import {
    ADD_TO_CARD,
    SET_SELECTED_VEHICLE,
    SET_ADDRESS,
    SET_PHONE
    } from "./actionTypes";

export const addToCard = (data) => {
   return dispatch => {
       dispatch({
           type: ADD_TO_CARD,
           payload: JSON.stringify(data)
       })
   }
}

export const setSelectedVihecle = vehicle => {
    return dispatch => {
        dispatch({
            type : SET_SELECTED_VEHICLE,
            payload: vehicle
        })
    }
}

export const setAddress = address => {
    return dispatch => {
        dispatch({
            type : SET_ADDRESS,
            payload: address
        })
    }
}

export const setPhone = phone => {
    return dispatch => {
        dispatch({
            type : SET_PHONE, 
            payload : phone
        })
    }
}