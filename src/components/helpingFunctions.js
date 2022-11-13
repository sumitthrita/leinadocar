import store from "../store"

export const onlyNumbers = (fieldValue) => {
    //return a value that replaces everything but numbers in the fieldValue.
    return fieldValue.replace(/\D/g, '');
}

export const validateEmail = (email) => {
    //return true/false depeding on whether the @param-email, is in the format of an email address
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export const findTotalAmount = () => {
    let services = [...JSON.parse(store.getState().checkoutReducer._services)]
    let totalAmount = services.reduce((total, service) => {
        return total += parseInt(service.amount)
    },0)

    return totalAmount;
}

export const isServiceAdded = id => {
    let services = [...JSON.parse(store.getState().checkoutReducer._services)]
    let found = false;
    for(let i=0; i < services.length; i++){
        if(services[i].id === id){
            found = true;
            break;
        }
    }

    return found;
}
