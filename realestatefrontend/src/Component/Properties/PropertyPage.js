import React, { useEffect, useState } from "react";
import { Link,useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import "./PropertyPage.css";

const PropertyPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { location: searchLocation, choice: searchChoice } = location.state;

  const [properties, setProperties] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8585/properties/search/${searchLocation}`)
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, [searchLocation]);

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };
  
  return (
    <div className="property-page">
      <h2>Properties</h2>

      <div className="property-grid">
        {properties.map((property) => (
          <div key={property.property_id} className="property-card">
            <p>{property.property_name}</p>
            <h3>{property.bhk_type}</h3>
            <p>{property.buildup_area}</p>
            <p>{property.city}</p>
            <div className="property-buttons">
            {/* <Link to={`/property/${property.id}`}>{property.title}</Link> */}
            <button onClick={() => handlePropertyClick(property.property_id)}>View Details</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PropertyPage;
