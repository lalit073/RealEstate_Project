import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../Home/Home.css'; // Import your CSS file for styling
import pune from '../images/pune.jpg';
import mumbai from '../images/mumbai.jpg'
import delhi from '../images/delhi.jpg'
import banglore from '../images/Banglore.jpg'
const Home = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [choice, setChoice] = useState("");

  const cities = ["Pune", "Mumbai", "Delhi","Banglore"]

  const cityImages = {
    Pune: pune,
    Mumbai: mumbai,
    Delhi: delhi,
    Banglore: banglore
  };

  const handleCityClick = (city) => {
    navigate("/properties", { state: { location: city, choice } });
  };

  const handleSearch = () => {
    if(location === ""){
      alert("Enter Into Search Your Desired Location")
    }else{
      navigate("/properties", { state: { location, choice } });
    }
    
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to RealEstate</h1>
        <p>Your trusted partner for finding your dream property.</p>
        <div className="search-form">
          <input
            type="text"
            placeholder="Enter City , Locality"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          
          <select value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="">Select choice</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
          
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className="city-list">
          {cities.map((city, index) => (
            <button
            key={index}
            className={`city-button ${city === "Pune" ? "pune-button" : ""} `}
            onClick={() => handleCityClick(city)}
          >
            <img src={cityImages[city]} alt={city} />
            <span>{city}</span>
          </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;