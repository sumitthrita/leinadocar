import React, { memo, useCallback, useState } from 'react'
import cardImage from '../Images/cards.png'
import internetImage from '../Images/internet.png'
import upiImage from '../Images/upi.png'

const CheckoutPayment = props => {

    return(
        <div className='checkoutMainLeft_Payment'>
            <div className='checkoutMainLeftPayment__header'>Payment Method</div>
            <div className='checkoutMainLeftPayment__eachMethod' >
                <div className={`paymentMethod_icon ${props.paymentMethod === "card" ? "selected" : ""}`} onClick={() => props.handlePaymentMethod("card")} >
                    <img src={cardImage} alt="cards" />
                </div>
                <div className='paymentMethod_text'>Debit/Credit Card</div>
            </div>
            <div className='checkoutMainLeftPayment__eachMethod'>
                <div className={`paymentMethod_icon ${props.paymentMethod === "internet" ? "selected" : ""}`} onClick={() => props.handlePaymentMethod("internet")} >
                    <img src={internetImage} alt="cards" />
                </div>
                <div className='paymentMethod_text'>Netbanking</div>
            </div>
            <div className='checkoutMainLeftPayment__eachMethod'>
                <div className={`paymentMethod_icon ${props.paymentMethod === "upi" ? "selected" : ""}`} onClick={() => props.handlePaymentMethod("upi")} >
                    <img src={upiImage} alt="cards" />
                </div>
                <div className='paymentMethod_text'>UPI</div>
            </div>
        </div>
    )
}

export default memo(CheckoutPayment);