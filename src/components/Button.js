import React, { memo } from 'react'

const Button = props => {

    return (
        <div className={`doc_button ${props.className}`}>
            <button
                className={`btn-default ${props.type}`} onClick={props.handleMe} disabled={props.disabled} >{props.label}
            </button>
        </div>
    )
}

export default memo(Button);