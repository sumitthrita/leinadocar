import React, { memo, useCallback, useEffect, useState } from 'react'
import CarAndModalSelectionData from './CarAndModalSelectionData'
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const CarAndModalSelection = props => {
    const [searchString, setSearchString] = useState("")
    const [dataToShow, setDataToShow] = useState([])
    
    useEffect(() => {
        let sortedData = props.data.sort((a,b) => {
            if(a.title > b.title) 
              return 1;
            else if (a.title < b.title)
              return -1;
            else
              return 0;
          })
        setDataToShow(sortedData)
    },[props.data])

    const handleChange = e => {
        setSearchString(e.target.value)
        handleFilter(e.target.value)
    }

    const handleFilter = string => {
        if(string === "") setDataToShow(props.data.sort((a,b) => {
            if(a.title > b.title) 
              return 1;
            else if (a.title < b.title)
              return -1;
            else
              return 0;
          }))
        else {
            const filtered = props.data.filter(e => e.title.toLowerCase().substring(0,string.length).includes(string))
            setDataToShow(filtered)
        }
    }

    return (
        <div className='carAndModal'>
            <div className='carAndModal_title'>
                {props.page !== "company" && <FontAwesomeIcon icon={faArrowLeft} onClick={() => {setSearchString(""); props.handleBack()}} />}
                {props.title} 
            </div>
            <div className='carAndModal_search'>
                <input type="text" value={searchString} onChange={handleChange} />
            </div>
            <CarAndModalSelectionData page={props.page} dataToShow={dataToShow} handleSelect={e => {setSearchString(""); props.handleSelect(e)}} searchString={searchString} />
        </div>
    )
}

export default memo(CarAndModalSelection)