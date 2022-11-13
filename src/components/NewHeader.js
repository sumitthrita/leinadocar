import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../Images/footer.png'

const NewHeader = props => {


    return (
        <div className='doc_nav' >
            <div className='docNav_left'>
                <div className='docNav_logo_name'>
                    <div className='docNav_logo'>
                        <img src={logo} alt="logo_image" />
                    </div>
                    <div className='docNav_name'>Doc.Car</div>
                </div>
                <div className='docNav_options'>
                    <div className='docNav_option pointer'>
                        <NavLink to="/leinadocar" activeClassName="active" >
                            <div className='docNav_title' >Home</div>
                        </NavLink>
                    </div>
                    <div className='docNav_option pointer'>
                        <NavLink to="/services" activeClassName="active" >
                            <div className='docNav_title' >Service</div>
                        </NavLink>
                    </div>
                    <div className='docNav_option pointer'>
                        <NavLink to="/aboutUs" activeClassName="active" >
                            <div className='docNav_title' >About</div>
                        </NavLink>
                    </div>
                    <div className='docNav_option pointer'>
                        <NavLink to="/services" activeClassName="active" >
                            <div className='docNav_title' >Contact</div>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className='docNav_right'>
                <div className='docNav_login'>
                    <div className='docNav_option pointer'>
                        <NavLink to="/login" activeClassName="active" >
                            <div className='docNav_title' >Login</div>
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default NewHeader;