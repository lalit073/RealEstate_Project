import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import "./PostProperty.css"; // Import your CSS file for styling

const PostProperty = () => {
  const [loggedIn, setLoggedIn] = useState(
    sessionStorage.getItem("loggedIn") === "true"
  );
  const [userId, setUserId] = useState(sessionStorage.getItem("userId") || "");
  console.log(userId);

  const navigate = useNavigate();

  const currentDate = new Date().toISOString().slice(0, 10);

  const [propertyDetails, setPropertyDetails] = useState({
    email_id: "",
    property_name: "",
    property_type: "",
    bhk_type: "",
    buildup_area: 0,
    furnishing_type: "",
    floor: 0,
    listing_date: "",
    locality: "",
    landmark_street: "",
    city: "",
    state: "",
    pincode: 0,
    description: "",
    operation: "", // 'buy' or 'rent'
    expected_rate: 0, // only for buying
    expected_rent: 0, // only for renting
    expected_deposit: 0, // only for renting
    preferred_tenants: "", // only for renting
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPropertyDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const body = {
        email_id: userId,
        property_name: propertyDetails.property_name,
        property_type: propertyDetails.property_type,
        bhk_type: propertyDetails.bhk_type,
        buildup_area: parseFloat(propertyDetails.buildup_area),
        furnishing_type: propertyDetails.furnishing_type,
        floor: parseInt(propertyDetails.floor), // Parse as integer
        listing_date: propertyDetails.listing_date,
        locality: propertyDetails.locality,
        landmark_street: propertyDetails.landmark_street,
        city: propertyDetails.city,
        state: propertyDetails.state,
        pincode: parseInt(propertyDetails.pincode),
        description: propertyDetails.description,
        operation: propertyDetails.operation,
        expected_rate: parseFloat(propertyDetails.expected_rate),
        expected_rent: parseFloat(propertyDetails.expected_rent), // only for renting
        expected_deposit: parseFloat(propertyDetails.expected_deposit), // only for renting
        preferred_tenants: propertyDetails.preferred_tenants,
      };
      console.log(body);
      const response = await axios.post(
        "http://localhost:8585/api/properties",
        body
      );
      if (response.status === 200) {
        console.log("Property added successfully:", response.data);
        // Reset form after successful submission
        setPropertyDetails({
          email_id: "",
          property_name: "",
          property_type: "",
          bhk_type: "",
          buildup_area: 0,
          furnishing_type: "",
          floor: 0,
          listing_date: "",
          locality: "",
          landmark_street: "",
          city: "",
          state: "",
          pincode: 0,
          description: "",
          operation: "",
          expected_rate: 0,
          expected_rent: 0,
          expected_deposit: 0,
          preferred_tenants: "",
        });
      }
    } catch (error) {
      console.error("Error adding property:", error);
    }
    navigate("/owner");
  }

  return (
    <div className="property-post">
      <h1>Post Property</h1>
      <form onSubmit={handleSubmit}>
        <label>Property Name:</label>
        <input
          type="text"
          name="property_name"
          value={propertyDetails.property_name}
          onChange={handleChange}
          required
          minLength="1"
          maxLength="200"
        />

        <label>Property Type:</label>
        <input
          type="text"
          name="property_type"
          value={propertyDetails.property_type}
          onChange={handleChange}
          required
          minLength="1"
          maxLength="200"
        />

        <label>BHK Type:</label>
        <select
          name="bhk_type"
          value={propertyDetails.bhk_type}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select Bhk Type</option>
          <option value="1rk">1 RK</option>
          <option value="1bhk">1 Bhk</option>
          <option value="2bhk">2 Bhk</option>
          <option value="3bhk">3 Bhk</option>
          <option value="4bhk">4 Bhk</option>
          {/* Add more options as needed */}
        </select>

        <label>Buildup Area: (SqFt)</label>
        <input
          type="number"
          name="buildup_area"
          value={propertyDetails.buildup_area}
          onChange={handleChange}
          required
          min="200"
          max="10000"
        />
        <label>Furnishing Type:</label>
        <select
          name="furnishing_type"
          value={propertyDetails.furnishing_type}
          onChange={handleChange}
          required
          className="input-field"
        >
          <option value="">Select Furnishing Type</option>
          <option value="unfurnished">Unfurnished</option>
          <option value="semi-furnished">Semi-Furnished</option>
          <option value="fully-furnished">Fully Furnished</option>
        </select>

        <label>Floor:</label>
        <input
          type="number"
          name="floor"
          value={propertyDetails.floor}
          onChange={handleChange}
          required
          min="0"
          max="100"
        />

        <label>Listing Date:</label>
        <input
          type="date"
          name="listing_date"
          value={propertyDetails.listing_date}
          onChange={handleChange}
          min={currentDate}
          required
        />
        <label>Locality:</label>
        <input
          type="text"
          name="locality"
          value={propertyDetails.locality}
          onChange={handleChange}
          required
          minLength="1"
          maxLength="200"
        />
        <label>Landmark/Street:</label>
        <input
          type="text"
          name="landmark_street"
          value={propertyDetails.landmark_street}
          onChange={handleChange}
          required
          minLength="1"
          maxLength="200"
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={propertyDetails.city}
          onChange={handleChange}
          required
          minLength="1"
          maxLength="200"
        />
        <label> State:</label>
        <input
          type="text"
          name="state"
          value={propertyDetails.state}
          onChange={handleChange}
          required
          minLength="1"
          maxLength="200"
        />

        <label>Pincode:</label>
        <input
          type="number"
          min="100000"
          max="999999"
          name="pincode"
          value={propertyDetails.pincode}
          onChange={handleChange}
          required
        />

        <label>Description:</label>
        <input
          type="text"
          name="description"
          value={propertyDetails.description}
          onChange={handleChange}
          required
          minLength="1"
          maxLength="200"
        />

        <label>Operation:</label>
        <select
          name="operation"
          value={propertyDetails.operation}
          onChange={handleChange}
          required
        >
          <option value="">Select Operation</option>
          <option value="buy">Sell</option>
          <option value="rent">Rent</option>
        </select>

        {propertyDetails.operation === "buy" && (
          <>
            <label>Expected Rate:</label>
            <input
              type="number"
              name="expected_rate"
              value={propertyDetails.expected_rate}
              onChange={handleChange}
              required
              min="1"
            />
          </>
        )}

        {propertyDetails.operation === "rent" && (
          <>
            <label>Expected Rent:</label>
            <input
              type="number"
              name="expected_rent"
              value={propertyDetails.expected_rent}
              onChange={handleChange}
              required
              min="1"
            />

            <label>Expected Deposit:</label>
            <input
              type="number"
              name="expected_deposit"
              value={propertyDetails.expected_deposit}
              onChange={handleChange}
              required
              min="1"
            />

            <label>Preferred Tenants:</label>
            <select
              name="preferred_tenants"
              value={propertyDetails.preferred_tenants}
              onChange={handleChange}
              required
            >
              <option value="">Select Operation</option>
              <option value="student">Students</option>
              <option value="family">Family</option>
              <option value="anyone">Anyone</option>
            </select>
          </>
        )}
        <div>
          <button type="submit">Post Property</button>
          <Link to="/owner" />
        </div>
        <div>
          <Link to="/owner">OwnerDashboard</Link>
        </div>
      </form>
    </div>
  );
};

export default PostProperty;
