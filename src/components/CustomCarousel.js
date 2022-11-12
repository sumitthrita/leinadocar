import React, { useEffect, useState } from 'react'
import arrowleft from '../Images/arrowleft.png'
import arrowright from '../Images/arrowright.png'

const CustomCarousel = props => {
    const [translateWidth, setTranslateWidth] = useState()
    const [height, setHeight] = useState()

    useEffect(() => {
        setTranslateWidth(0)
        let el = document.getElementsByClassName("customCarousel")
        let elArrow = document.getElementsByClassName("cC_arrow")
        if(el && el[0] && elArrow && elArrow[0]){
            setHeight((el[0].clientHeight-elArrow[0].clientHeight)/2)
        }
    },[])

    const datatoShow = () => props.data.map((e, i) => 
                <div className='cC_eachContent' key={e.id}>
                    <div className='cc_eachImage' >
                        <img src={e.img} alt="image" />
                    </div>
                    <div className='cC_eachTitle'>{e.title} </div>
                </div>
            )

    const handleArrowClick = (type) => {
        if(type === "left"){
            if(translateWidth !== 0){
                setTranslateWidth(translateWidth + props.transformWidth)
            }
        }
        if(type === "right"){
            if(translateWidth !== props.transformWidth*props.count*(-1)){
                setTranslateWidth(translateWidth - props.transformWidth)
            }
        }
    }

    return (
        <div className='customCarousel'>
            {translateWidth !== 0 && 
                <div className='cC_arrow arrowLeft pointer' style={{top : height}} >
                    <img src={arrowleft} onClick={() => handleArrowClick("left")} />
                </div>
            }
            <div className='cC_contentbox'>
                <div className='cC_contents' style={{transform : `translateX(${translateWidth}px)`}}>
                    {props.children}
                </div>
            </div>
            {translateWidth !== props.transformWidth*props.count*(-1) && 
                <div className='cC_arrow arrowRight pointer' style={{top : height}}>
                    <img src={arrowright} onClick={() => handleArrowClick("right")}/>
                </div>
            }
        </div>
    )
}

export default CustomCarousel;