import {
    ADD_TO_CARD,
    SET_SELECTED_VEHICLE,
    SET_ADDRESS,
    SET_PHONE,
    SET_SERVICES_TO_SELECT
    } from "../Redux/actionTypes";
  
    //status => "closed" means not focused, "open" means doc is ready to edit and fill, "done" means added to rx or review panel
    const initial_state = {
        _selectedVehicle: {
            company: "",
            modal : "",
            engineType: ""
        },
        _services : JSON.stringify([]),
        _address : "",
        _contactNumber : "",
        _servicesToSelect : []
    };
  
    
    
    const checkoutReducer = ( state = {...initial_state}, action) => {
      
      switch (action.type) {
        case ADD_TO_CARD:
            return {
            ...state,
            _services : action.payload
            }
            break;
        case SET_SELECTED_VEHICLE:
            return {
                ...state, 
                _selectedVehicle : action.payload
            }
            break;
        case SET_ADDRESS:
            return {
                ...state,
                _address : action.payload
            }
            break;
        case SET_PHONE:
            return {
                ...state,
                _phone : action.payload
            }
            break;
        case SET_SERVICES_TO_SELECT:
            return {
                ...state,
                _servicesToSelect : action.payload
            }
            break;
        default:
          return state;
      }
    };
  
    
    export default checkoutReducer;
    