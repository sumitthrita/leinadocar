import React, { memo, useEffect, useState } from "react"
import { setSelectedVihecle } from "../Redux/action";
import CarAndModalSelection from "./CarAndModalSelection";
import petrol from '../Images/petrol.png'
import diesel from '../Images/deisel.png'
import cng from '../Images/cng.png'
import { useDispatch, useSelector } from "react-redux";

const CarSelectionModal = props => {
  const [page, setPage] = useState("company")
  const [vehicleInfo, setVehicleInfo] = useState({
    company: "",
    carModal : "",
    engineType: ""
  })

  const { _selectedVehicle } = useSelector(store => ({
    _selectedVehicle : store.checkoutReducer._selectedVehicle
  }))

  useEffect(() => {
    if(_selectedVehicle.engineType !== ""){
      setVehicleInfo(_selectedVehicle)
    }
  },[_selectedVehicle])

  const dispatch = useDispatch()
  const companyData = [
    {
        id: 1,
        img : "https://www.freepnglogos.com/uploads/honda-logo-png/honda-logo-png-19.png",
        title : "Honda"
    },
    {
        id: 2,
        img : "https://www.freepnglogos.com/uploads/hyundai-logo-6.png",
        title : "Hyundai"
    },
    {
        id: 3,
        img : "https://www.freepnglogos.com/uploads/suzuki-png-logo/suzuki-png-logo-1.png",
        title : "Maruti Suzuki"
    },
    {
        id: 4,
        img : "https://www.freepnglogos.com/uploads/ford-cars-logo-brands-png-images-15.png",
        title : "Ford"
    },
    {
        id: 5,
        img : "https://www.freepnglogos.com/uploads/audi-logo-2.png",
        title : "Audi"
    },
    {
        id: 6,
        img : "https://www.freepnglogos.com/uploads/bmw-car-logo-png-brand-image-2.png",
        title : "BMW"
    },
    {
        id: 7,
        img : "https://www.freepnglogos.com/uploads/lamborghini-logo-png/lamborghini-logo-gallery-italian-car-logos-0.png",
        title : "Lamborghini"
    },
    {
        id: 8,
        img : "https://www.freepnglogos.com/uploads/cars-logo-brands-png-images-30.png",
        title : "Porsche"
    },
    {
        id: 9,
        img : "https://www.freepnglogos.com/uploads/renault-car-logo-png-transparent-image-9.png",
        title : "Renault"
    },
    {
        id: 10,
        img : "https://www.freepnglogos.com/uploads/skoda-car-logo-png-brand-image-32.png",
        title : "Skoda Octavia"
    },
    {
        id: 11,
        img : "https://www.freepnglogos.com/uploads/car-logo-brands-png-transparent-image-7.png",
        title : "Toyata"
    },
    {
        id: 12,
        img : "https://www.freepnglogos.com/uploads/nissan-car-logo-png-brand-image-24.png",
        title : "Nissan"
    },
    {
        id: 13,
        img : "https://www.freepnglogos.com/uploads/kia-car-logo-png-brand-image-33.png",
        title: "Kia"
    },
    {
        id: 14,
        img : "https://www.freepnglogos.com/uploads/volvo-car-logo-png-brand-image-20.png",
        title : "Volvo"
    },
    {
      id:24,
      img:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/1116px-Tata_logo.svg.png",
      title : "Tata"
    }
]

const engineData = [
  {
    id: 15,
    img : "https://storage.googleapis.com/gomechanic_assets/fuel_type/PETROL.svg",
    title: "Petrol"
  },
  {
    id: 16,
    img : "https://storage.googleapis.com/gomechanic_assets/fuel_type/CNG.svg",
    title: "CNG"
  },
  {
    id: 17,
    img : "https://storage.googleapis.com/gomechanic_assets/fuel_type/DIESEL.svg",
    title: "Deisel"
  },
  {
    id: 18,
    img : "https://storage.googleapis.com/gomechanic_assets/fuel_type/electric.svg",
    title: "Electric"
  }
]

  const modalData = [
    {
      id : 19,
      img : "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/all-vehicles/azera-ig-fl-quater-view-oxford-blue.png",
      title : "Azera"
    },
    {
      id : 20,
      img : "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/all-vehicles/i10-ac3-i10-quater-view.png",
      title : "i10"
    },
    {
      id : 21,
      img : "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/all-vehicles/i20-bc3-i20-quater-view.png",
      title : "i20"
    },{
      id : 22,
      img : "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/all-vehicles/venue-qx-preview-quarter-view-v2.png",
      title : "Venue"
    }
    ,{
      id : 23,
      img : "https://www.hyundai.com/content/dam/hyundai/ww/en/images/find-a-car/all-vehicles/creta-su2-creta-quater-view-polar-white.png",
      title : "Creta"
    }
  ]

  const handleForward = {
    "company" : () => { setPage("carModal")},
    "carModal" : () => {setPage("engineType")},
    "engineType" : ""
  }

  const goBackward = {
    "company" : "",
    "carModal" : () => {setPage("company")},
    "engineType" : () => {setPage("carModal")}
  }

  const handleSelect = e => {
      if(e.target.tagName === "IMG" || (e.target.tagName === "DIV" && e.target.id === "item_title")){
          setVehicleInfo({
            ...vehicleInfo,
            [page] : e.target.dataset.title
          })
          page !== "engineType" && handleForward[page]()
      }
  }

  const handleDone = e => {
    if(vehicleInfo.engineType !== ""){
      dispatch(setSelectedVihecle(vehicleInfo))
      props.closeModal()
    }
  }

  const pageToLoad = {
    "company" : <CarAndModalSelection page={page} data={companyData} handleSelect={e => handleSelect(e)} title="Select Manufacturer" />,
    "carModal" : <CarAndModalSelection page={page} data={modalData} handleBack={goBackward[page]} handleSelect={e => handleSelect(e)} title="Select Modal" />,
    "engineType" : <CarAndModalSelection page={page} handleDone={handleDone} vehicleInfo={vehicleInfo} data={engineData} handleBack={goBackward[page]} handleSelect={e => handleSelect(e)} title="Select Fuel Type" />
  }

  return (
    <div className="carSelectionModal">
        {pageToLoad[page]}
    </div>
  )
}

export default memo(CarSelectionModal);
