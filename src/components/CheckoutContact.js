import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPhone } from '../Redux/action'
import Button from './Button'
import { onlyNumbers } from './helpingFunctions'

const CheckoutContact = props => {

    const [number, setNumber] = useState("")

    const {contact} = useSelector((store) => ({
        contact : store.checkoutReducer._contactNumber
    }))

    const dispatch = useDispatch()

    useEffect(() => {
        if(contact){
            setNumber(contact)
        }
    },[])

    const handleChange = (e) => {
        let newVal = onlyNumbers(e.target.value)
        if(newVal.length < 11){
            setNumber(newVal)
            if(newVal.length === 10) {
                dispatch(setPhone(newVal))
            }
        }
    }

    return (
        <div className='checkoutMainLeft-Contact'>
            <div className='checkoutMainContact-header'>
                Enter Mobile No.
            </div>
            <div className='checkoutMainContact-input'>
                <input inputmode="numeric" name="number" value={number} onChange={(e) => handleChange(e)} />
            </div>
        </div>
    )
}

export default memo(CheckoutContact);