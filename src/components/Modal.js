import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { TransitionGroup } from 'react-transition-group';

const Modal = props => {

    const handleClose = () => {
        props.handleClose()
    }

    return (
        <TransitionGroup
            transitionName="modalOverlay"
            transitionAppear={true}
            transitionEnter={false}
            transitionLeave={false}>
            <div className={props.show ? "popUpmodal display-block" : "modal display-none"} onClick={handleClose}>
                <TransitionGroup
                    transitionName="modalMain"
                    transitionAppear={true}
                    transitionEnter={false}
                    transitionLeave={false}>
                    <div className={`modal-main ${props.title} ${props.className || ""}`} onClick={props.remainClose}>
                        {/* {props.title !== undefined && (props.title !== null ? 
                            <div className="modal-head" > 
                                <h3>{props.titleIcon ? props.titleIcon : props.title}</h3> 
                            </div>
                        :
                             ""
                        )} */}
                        <div className="modal-body">{props.children}</div>
                        <div className="modal-btn-close" onClick={handleClose}>
                            <FontAwesomeIcon icon={faXmark} />
                        </div>
                    </div>
                </TransitionGroup>
            </div>
        </TransitionGroup>
    );
}

export default Modal;