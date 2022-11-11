import { DentingAndPainting, PeriodicServices } from "../components/ServicesData";
import {
    ADD_TO_CARD,
    SET_SELECTED_VEHICLE,
    SET_ADDRESS,
    SET_PHONE,
    SET_SERVICES_TO_SELECT,
    OPEN_MODAL,
    CLOSE_MODAL,
    SHOW_GENERAL_MODAL_ACTION
    } from "./actionTypes";

export const openModal = () => {
    return dispatch => {
        dispatch({
            type : OPEN_MODAL
        })
    }
}

export const closeModal = () => {
    return dispatch => {
        dispatch({
            type : CLOSE_MODAL
        })
    }
}

export const showGeneralModalAction = (data) => {
    //data is an object
    return dispatch => {
        dispatch({
            type : SHOW_GENERAL_MODAL_ACTION,
            payload : data
        })
    }
}

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

export const setServicesToSelect = serviceType => {
    let services = []
    switch (serviceType) {
        case "Periodic Services":
            services = PeriodicServices
            break;
        case "Denting & Paiting":
            services = DentingAndPainting
            break;
        default:
            break;
    }
    return dispatch => {
        dispatch({
            type : SET_SERVICES_TO_SELECT, 
            payload: services
        })
    }
}