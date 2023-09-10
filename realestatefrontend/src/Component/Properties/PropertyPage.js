import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./PropertyPage.css";

const PropertyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { location: searchLocation, choice: searchChoice } = location.state;

  const [properties, setProperties] = useState([]);

  const loggedIn = sessionStorage.getItem("loggedIn");
  const userId = sessionStorage.getItem("userId");
  console.log(userId);
  console.log(loggedIn);

  useEffect(() => {
    axios
      .get(`http://localhost:8585/properties/search/${searchLocation}`)
      .then((response) => {
        if(searchChoice === "buy"){
          const city = response.data.filter((e)=>e.buying&&1)
          setProperties([...city]);
        }
        else if(searchChoice === "rent"){
          const city = response.data.filter((e)=>e.rental&&1)
          setProperties([...city])
        }
        else{
          const city = response.data;
          setProperties([...city]);
        }
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, [searchLocation,searchChoice]);

  const handlePropertyClick = (propertyId) => {
    if(loggedIn){
      navigate(`/property/${propertyId}`);
    }
    else{
      navigate("/signin")
    }
   
  };

  return (
    <div className="property-page">
      <h2>Properties</h2>

      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.property_id} className="property-card">
            <h3 className="property-title">

           <h1>
            {  property.rental&&1?(<>{"For Rent"}<br></br></>):(<> {"For Sell"}<br></br></>)}
            </h1>

              {property.bhk_type} Flat In {property.location}{" "}
              {property.landmark_street}, {property.city}, {property.state}
            </h3>
            <h3 className="property-name">{property.property_name}</h3>
            <p className="property-info">
              Property Type: {property.property_type}
              <br />
              Furnishing: {property.furnishing_type}
              <br />
              Builtup Area: {property.buildup_area}
              <br />
             

          {  property.rental&&1?(
            <>Expected Rent: {property.rental.expected_rent}<br></br> Expected Deposit: {property.rental.expected_deposit}<br></br> 
            Preferred Tenants: {property.rental.preferred_tenants}
            
            </> 
          
            
          ):( <>Expected Rate: {property.buying.expected_rate} <br></br><br></br><br></br>
                </>
          
          )
          }

            </p>

            <p className="listing-date">
              Available from: {property.listing_date}
            </p>
            <div className="property-buttons">
              <button onClick={() => handlePropertyClick(property.property_id)}>
                View Owner Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
