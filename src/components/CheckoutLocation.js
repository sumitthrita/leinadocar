import { faMapMarkerAlt, faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from './Button';
import React, { memo, useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setAddress } from '../Redux/action';


const CheckoutLoacation = props => {

    const { address } = useSelector(store => ({
        address : store.checkoutReducer._address
    }))

    const [localAddress, setLocalAddress] = useState("")
    const [canEdit, setCanEdit] = useState(false)

    useEffect(() => {
        if(address !== ""){
            setLocalAddress(address)
        } else {
            setCanEdit(true)
        }
    },[])

    const dispatch = useDispatch()

    const handleAddress = useCallback((e) => {
        setLocalAddress(e.target.value)
    },[localAddress])

    const handleEdit = useCallback((e) => {
       setCanEdit(true) 
    },[])

    const handleSave = useCallback((e) => {
        setCanEdit(false)
        dispatch(setAddress(localAddress))
    },[localAddress])

    return (
        <div className="checkoutMainLeft-location">
            <div className="checkoutLocation-header">
                <div className="checkoutLocationHeader-title">Location</div>
                {!canEdit && <div className="checkoutLocationHeader-button" onClick={handleEdit} ><FontAwesomeIcon icon={faPencil} /> Change</div>}
            </div>
            <div className={"checkoutLocation-address" + (canEdit ? " inside" : "")}>
                <FontAwesomeIcon icon={faMapMarkerAlt} className={canEdit ? "inside" : ""} />
                <div className="checkoutAddress-text">
                    {(!canEdit) ?
                        address
                        :
                        <input type="text" name="address" value={localAddress} onChange={handleAddress} placeholder="Enter Address" />
                    }
                </div>
            </div>
            {canEdit && <Button className="address" label="Save Address" handleMe={handleSave} />}
        </div>
    )
}

export default memo(CheckoutLoacation);