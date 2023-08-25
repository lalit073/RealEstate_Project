import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import your CSS file for styling

const Home = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [choice, setChoice] = useState("");

  const HandleSearch = () => {
    if(location === ""){navigate('/')}
    else{
    navigate("/properties", { state: { location, choice } });
    }
  };

  return (
    <div className="home">
      <div className="home-content">
        <h1>Welcome to RealEstate Management</h1>
        <p>Your trusted partner for finding your dream property.</p>
        <div className="search-form">
          <input
            type="text"
            placeholder="Enter City"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          
          <select value={choice} onChange={(e) => setChoice(e.target.value)}>
            <option value="">Select choice</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
          <button onClick={HandleSearch}>Search</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
