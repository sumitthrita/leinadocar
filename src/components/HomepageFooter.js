import React, { memo, useState } from 'react'
import logo from '../Images/footer.png'
import fb from '../Images/fb.png'
import linkedin from '../Images/linkedin.png'
import twitter from '../Images/twitter.png'
import Button from './Button'
import { validateEmail } from './helpingFunctions'

const HomepageFooter = props => {
    const [email, setEmail] = useState("")

    const icons = [fb, linkedin, twitter]

    const handleSubscribe = () => {
        let emailvalidation = validateEmail(email)
        if(emailvalidation){
           alert("submitted")
        } else {
            alert("error")
        }
    }

    return (
        <div className='homepagefooter'>
            <div className='hpf_top'>
                <div className='hpf_one'>
                    <div className='hpf_logo_name'>
                        <div className='hpf_ln_logoimg'>
                            <img src={logo} alt="logo_image" />
                        </div>
                        <div className='hpf_ln_nameinfo'>
                            <div className='hpf_ln_name'>Doc.Car</div>
                            <div className='hpf_ln_subname'>Heal & Fix it away.</div>
                            <div className='hpf_social_icons'>
                                {icons.map(e => 
                                    <div className='hpf_si_icon'>
                                        <img src={e} alt="socialmedia_icon" />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='hpf_two'>
                    <div className='hpfs_title'>General</div>
                    <div className='hpfs_para'>About Us</div>
                    <div className='hpfs_para'>Career</div>
                </div>
                <div className='hpf_three'>
                    <div className='hpfs_title'>Services</div>
                    <div className='hpfs_para'>General Service</div>
                    <div className='hpfs_para'>Dent & Paint</div>
                </div>
                <div className='hpf_four'>
                    <div className='hpfs_title'>Subscribe to Newsletter</div>
                    <div className='hpf_subscribe'>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email Address" />
                        <div className='hpf_subs_button'>
                            <Button label="Subscribe" handleMe={handleSubscribe} />
                        </div>
                    </div>
                </div>
            </div>
            <div className='hpf_footer'>
               <span className='copyright'>&copy;</span>
               <span className='hpf_footer_text'>2022 All Rights Reserved</span>
               <span className='vertical_seperation'></span>
               <span className='hpf_footer_text' >Doc.Car</span>
            </div>
        </div>
    )
}

export default memo(HomepageFooter);