import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // Import Link from react-router-dom
import axios from "axios";
import "./OwnerDashboard.css"; // Import your CSS file

const OwnerDashboard = () => {
  const navigate = useNavigate();
  // const [loggedIn, setLoggedIn] = useState(
  //   sessionStorage.getItem("loggedIn") === "true"
  // );
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") || "");
  const [ownedProperties, setOwnedProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from the Spring Boot API
    axios
      .get(`http://localhost:8585/propertydetails/${userId}`) // Replace with your API URL
      .then((response) => {
        setOwnedProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, [userId]);

  const handlePropertyClick = (propertyId) => {
    navigate(`/property/${propertyId}`);
  };


  const handleDeleteProperty = async (propertyId) => {
    try {
      // Optimistic UI update
      const updatedProperties = ownedProperties.filter(
        (property) => property.property_id !== propertyId
      );
      setOwnedProperties(updatedProperties);

      // Delete property on the server
      await axios.delete(`http://localhost:8585/deleteproperty/${propertyId}`);
    } catch (error) {
      console.error("Error deleting property:", error);
      // Revert the UI update on error
      setOwnedProperties(ownedProperties);
    }
  };

  const handleUpdateProperty = async (propertyId) => {
    navigate(`/propertyupdate/${propertyId}`);
  };

  const handleUserId = async () => {
    navigate("/postproperty");
  };

  return (
    <div className="owner-dashboard">
      <h2>Owner Dashboard</h2>
      <div className="owned-properties">
        <h3>Your Posted Properties</h3>
        <ul>
          {ownedProperties.map((property) => (
            <li key={property.property_id}>
              <p> {property.property_name}</p>
              <p>{property.location}</p>

              <div className="property-buttons">
                <button
                  onClick={() => handleDeleteProperty(property.property_id)}
                >
                  Delete
                </button>
                <button
                  onClick={() => handlePropertyClick(property.property_id)}
                >
                  View Details
                </button>
                <button
                  onClick={() => handleUpdateProperty(property.property_id)}
                >
                  {" "}
                  Update Property
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-property-button">
        <button onClick={handleUserId}>Add/Post Property</button>
      </div>
    </div>
  );
};

export default OwnerDashboard;
