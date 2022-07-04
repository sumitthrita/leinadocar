import React from "react"
import "./Booking.css"

const Booking = () => {
  return (
    <div className="main-container">
      <h1 className="heading">A simpler way to book a car service</h1>
      <button className="car-button">Car</button>
      <button className="bike-button">Bike</button>
      <form>
        <select name="cars" className="cars-select">
          <option value="brand">Select your brand*</option>
          <option value="chevrolet">Chevrolet</option>
          <option value="mahindra">Mahindra</option>
          <option value="tata">Tata</option>
          <option value="hyundai">Hyundai</option>
          <option value="skoda">Skoda</option>
          <option value="maruti">Maruti Suzuki</option>
        </select>
        <select name="models" className="bikes-select">
          <option value="model">Select your model</option>
          <option value="avero">Avero Diesel</option>
          <option value="cruize">Cruize Diesel</option>
          <option value="captiva">Captiva</option>
          <option value="averopetrol">Avero Petrol</option>
        </select>
        <button className="check-price-btn">
          <p className="submit-btn-txt">Check price</p>
        </button>
      </form>
    </div>
  )
}

export default Booking
