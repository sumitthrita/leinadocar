import React, { memo } from 'react'
import { Routes, Route} from 'react-router-dom';
import Checkout from './Checkout';
import HomePage from './Homepage';
import Services from './Services';

const Main = props => {
    
    return (
        <div className='leinaDocar_main'>
            <Routes>
                <Route path="/leinadocar" exact strict element={<HomePage />} />
                <Route path="/checkout" exact strict element={<Checkout />} />
                <Route path="/services" exact strict element={<Services />} />
                <Route path="/contact" exact strict element={<Services />}/>
                <Route path="/aboutUs" exact strint element={<Services />} />
                <Route path="/login" exact strict element={<Services />}/>
            </Routes>
        </div>
    )
}

export default memo(Main);