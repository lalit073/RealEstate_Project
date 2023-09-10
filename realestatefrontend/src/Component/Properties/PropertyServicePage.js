import React, { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./PropertyServicePage.css"; // Add your CSS styles here

const PropertyServicePage = () => {
  const { propertyId } = useParams();
  const [propertyDetails, setPropertyDetails] = useState({});
  const [ownerDetails, setOwnerDetails] = useState({});
  // const [rent,setRent] = useState({});
  // const [buy,setBuy] = useState({});

  console.log(propertyId);

  const fetchPropertyDetails = useCallback(async () => {
    try {
      // Fetch property details using propertyId
      const propertyResponse = await axios.get(
        `http://localhost:8585/property/${propertyId}`
      );
      setPropertyDetails(propertyResponse.data);

      // Fetch owner details using ownerId from property details
      const ownerResponse = await axios.get(
        `http://localhost:8585/property-details/${propertyResponse.data.email_id}`
      );
      setOwnerDetails(ownerResponse.data);

      // const rental = await axios.get(`http://localhost:8585/rented-properties`);
      // setRent(rental.data);
      // console.log(rent);

      // const buying = await axios.get(`http://localhost:8585/buying-properties`)
      // setBuy(buying.data);
      // console.log(buy)

    } catch (error) {
      console.error("Error fetching property details:", error);
    }
  }, [propertyId]);

  useEffect(() => {
    fetchPropertyDetails();
  }, [fetchPropertyDetails]);

  return (
    <div className="property-service-page">
      <h2>Property Details</h2>
      <div className="property-details">
        <h3>Property Info</h3>
        <p>Title: {propertyDetails.property_name}</p>
        <p>BHK-TYPE : {propertyDetails.bhk_type}</p>
        <p>BuildUp Area : {propertyDetails.buildup_area}</p>
        <p>City : {propertyDetails.city}</p>
        <p>Locality : {propertyDetails.locality}</p>
        <p>Furnished Type : {propertyDetails.furnishing_type}</p>
        <p>Listing Date : {propertyDetails.listing_date}</p>
        <p>State: {propertyDetails.state}</p>
        <p>Pincode : {propertyDetails.pincode}</p>
        <p>Description: {propertyDetails.description}</p>
        {/* {propertyDetails.propertyId===buy.propertyId && (<p>{buy.expected_price}</p>)} */}
        {/* Add more property details */}
      </div>
      <div className="owner-details">
        <h3>Owner Info</h3>
        <p>
          Name: {ownerDetails.first_name} {"  "} {ownerDetails.last_name}
        </p>
        <p>Email: {ownerDetails.email_id}</p>
        <p>Address: {ownerDetails.address}</p>
        <p>Contact: {ownerDetails.contact}</p>
        {/* Add more owner details */}
      </div>
    </div>
  );
};

export default PropertyServicePage;
