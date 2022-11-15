import { faPencil, faMapMarkerAlt, faCheckCircle, faCheck } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import React, { memo, useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import Button from "./Button"
import CheckoutCart from "./CheckoutCart"
import CheckoutContact from "./CheckoutContact"
import CheckoutLocation from "./CheckoutLocation"
import CheckoutPayment from "./CheckoutPayment"

const Checkout = props => {

    const [services, setServices] = useState([])
    const [paymentMethod, setPaymentMethod] = useState("")

    const {selectedVehicle, selectedServices, _address, _contactNumber} = useSelector(store => ({
        selectedVehicle : store.checkoutReducer._selectedVehicle,
        selectedServices : store.checkoutReducer._services,
        _address : store.checkoutReducer._address,
        _contactNumber : store.checkoutReducer._contactNumber
    }))

    useEffect(() => {
        if(selectedServices){
            let currentServices = JSON.parse(selectedServices)
            setServices(currentServices)
        }
    },[selectedServices])

    const handlePaymentMethod = useCallback((value) => {
        setPaymentMethod(value)
    },[])

    const handlePlaceOrder = () => {

    }

    return(
        <div className="checkout">
            <div className="checkout__statusBar">
                <div className="cO__sB-each">
                    <div className="sB__title">
                        Vehicle Seleced
                    </div>
                    <div className="sB__each-bar">
                        <div className="sB__bar"></div>
                        <div className={`sB_circle ${selectedVehicle.engineType !== "" ? "complete" : ""}`}>
                            <div className={`sB_innerCircle ${selectedVehicle.engineType !== "" ? "complete" : ""}`} >
                                {selectedVehicle.engineType !== "" && 
                                    <FontAwesomeIcon icon={faCheck} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cO__sB-each">
                    <div className="sB__title">
                        Services Added
                    </div>
                    <div className="sB__each-bar">
                        <div className="sB__bar"></div>
                        <div className={`sB_circle ${services?.length > 0 ? "complete" : ""}`}>
                            <div className={`sB_innerCircle ${services?.length > 0 ? "complete" : ""}`} >
                                {services?.length > 0  && 
                                    <FontAwesomeIcon icon={faCheck} />
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cO__sB-each">
                    <div className="sB__title">
                        Book Appointment
                    </div>
                    <div className="sB__each-bar">
                        <div className="sB__bar"></div>
                        <div className={`sB_circle`}>
                            <div className={`sB_innerCircle`} ></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="checkout_main">
                <div className="checkoutMain__left">
                    <CheckoutLocation />
                    <CheckoutContact />
                    <CheckoutPayment paymentMethod={paymentMethod} handlePaymentMethod={(value) => handlePaymentMethod(value)} />
                </div>
                <div className="checkoutMain__right">
                    <CheckoutCart />
                    { selectedVehicle.engineType !== "" && services.length > 0 && _address !== "" && _contactNumber !== "" && paymentMethod !== "" &&
                        <Button label="Place Order" className="placeOrderbtn" handleMe={handlePlaceOrder} />
                    }
                </div>
            </div>
        </div>
    )
}

export default memo(Checkout);