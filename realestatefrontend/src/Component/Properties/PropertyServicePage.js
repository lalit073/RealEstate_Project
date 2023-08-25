import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './PropertyServicePage.css'; // Add your CSS styles here

const PropertyServicePage = () => {
    const { propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});
  const [ownerDetails, setOwnerDetails] = useState({});
  console.log(propertyId)

  useEffect(() => {
    fetchPropertyDetails();
  }, [propertyId]);

  const fetchPropertyDetails = async () => {
    try {
      // Fetch property details using propertyId
      const propertyResponse = await axios.get(`http://localhost:8585/property/${propertyId}`);
      setPropertyDetails(propertyResponse.data);

      // Fetch owner details using ownerId from property details
      const ownerResponse = await axios.get(`/api/owners/${propertyResponse.data.ownerId}`);
      setOwnerDetails(ownerResponse.data);
    } catch (error) {
      console.error('Error fetching property details:', error);
    }
  };

  return (
    <div className="property-service-page">
      <h2>Property Details</h2>
      <div className="property-details">
        <h3>Property Info</h3>
        <p>Title: {propertyDetails.property_name}</p>
        <p>Description: {propertyDetails.description}</p>
        {/* Add more property details */}
      </div>
      <div className="owner-details">
        <h3>Owner Info</h3>
        <p>Name: {ownerDetails.name}</p>
        <p>Email: {ownerDetails.email}</p>
        {/* Add more owner details */}
      </div>
    </div>
  );
};

export default PropertyServicePage;
