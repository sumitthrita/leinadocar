import React from 'react'

const CarAndModalSelectionData = props => {


    return (
        <div className='carAndModal_items' onClick={props.handleSelect} >
            {props.dataToShow.length > 0 ? 
                props.dataToShow.map((e) => 
                    <div key={e.id} className='carAndModal_eachItems'>
                        <div className={'carAndModal_eachItems_img' + " page_" + props.page + " " + (props.page === "engineType" && props.vehicleInfo.engineType === e.title ? "item_selected" : "")}>
                            <img data-title={e.title} src={e.img} alt="carcompanylogo" />
                        </div>
                        <div id="item_title" data-title={e.title} className={'carAndModal_eachItems_title ' + (props.page === "engineType" && props.vehicleInfo.engineType === e.title ? "item_selected" : "")}>{e.title} </div>
                    </div>
                )
            :
                <div className='carAndModal_noitem'>Sorry, no item found with the "<span>{props.searchString}</span>"</div>
            }
        </div>
    )
}

export default CarAndModalSelectionData;