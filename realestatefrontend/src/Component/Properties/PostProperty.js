import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PostProperty.css'; // Import your CSS file for styling


const PostProperty = () => {
  const navigate = useNavigate();

  const [propertyDetails, setPropertyDetails] = useState({
    property_name: '',
    property_type: '',
    bhk_type: '',
    buildup_area: 0,
    furnishing_type: '',
    floor: 0,
    listing_date: '',
    locality: '',
    landmark_street: '',
    city: '',
    state: '',
    pincode: 0,
    description: '',
    operation: '', // 'buy' or 'rent'
    expected_rate: 0, // only for buying
    expected_rent: 0, // only for renting
    expected_deposit: 0, // only for renting
    preferred_tenants: '' // only for renting
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
    window.alert("Axios method")
    try {
      const response = await axios.post('http://localhost:8585/api/properties',

        {

          "property_name": propertyDetails.property_name,
          "property_type": propertyDetails.property_type,
          "bhk_type": propertyDetails.bhk_type,
          "buildup_area": parseFloat(propertyDetails.buildup_area),
          "furnishing_type": propertyDetails.furnishing_type,
          "floor": parseInt(propertyDetails.floor), // Parse as integer
          "listing_date": propertyDetails.listing_date,
          "locality": propertyDetails.locality,
          "landmark_street": propertyDetails.landmark_street,
          "city": propertyDetails.city,
          "state": propertyDetails.state,
          "pincode": parseInt(propertyDetails.pincode),
          "description": propertyDetails.description,
          "operation": propertyDetails.operation,
          "expected_rate": parseFloat(propertyDetails.expected_rate),
          "expected_rent": parseFloat(propertyDetails.expected_rent), // only for renting
          "expected_deposit": parseFloat(propertyDetails.expected_deposit),// only for renting
          "preferred_tenants": propertyDetails.preferred_tenants,

        
        });
      if (response.status === 200) {
        console.log('Property added successfully:', response.data);
        // Reset form after successful submission
        setPropertyDetails({
          property_name: '',
          property_type: '',
          bhk_type: '',
          buildup_area: 0,
          furnishing_type: '',
          floor: 0,
          listing_date: '',
          locality: '',
          landmark_street: '',
          city: '',
          state: '',
          pincode: 0,
          description: '',
          operation: '',
          expected_rate: 0,
          expected_rent: 0,
          expected_deposit: 0,
          preferred_tenants: '',
        });
      }
    } catch (error) {
      console.error('Error adding property:', error);
    }

    navigate('/owner');

  };

  return (
    <div className="property-post">
      <h2>Post Property</h2>
      <form onSubmit={handleSubmit}>
        <label>Property Name:</label>
        <input
          type="text"
          name="property_name"
          value={propertyDetails.property_name}
          onChange={handleChange}
          required
        />

        <label>Property Type:</label>
        <input
          type="text"
          name="property_type"
          value={propertyDetails.property_type}
          onChange={handleChange}
          required
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
          <option value="1bhk">1 Bhk</option>
          <option value="2bhk">2 Bhk</option>
          <option value="3bhk">3 Bhk</option>
          {/* Add more options as needed */}
        </select>
        <label>Buildup Area:</label>
        <input
          type="number"
          name="buildup_area"
          value={propertyDetails.buildup_area}
          onChange={handleChange}
          required
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
        />
        <label>Listing Date:</label>
        <input
          type="text"
          name="listing_date"
          value={propertyDetails.listing_date}
          onChange={handleChange}
          required
        />
        <label>Locality:</label>
        <input
          type="text"
          name="locality"
          value={propertyDetails.locality}
          onChange={handleChange}
          required
        />
        <label>Landmark/Street:</label>
        <input
          type="text"
          name="landmark_street"
          value={propertyDetails.landmark_street}
          onChange={handleChange}
          required
        />
        <label>City:</label>
        <input
          type="text"
          name="city"
          value={propertyDetails.city}
          onChange={handleChange}
          required
        />
        <label> State:</label>
        <input
          type="text"
          name="state"
          value={propertyDetails.state}
          onChange={handleChange}
          required
        />
        <label>Pincode:</label>
        <input
          type="number"
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
        />
        <div className="operation">
          <label>Operation:</label>
          <select
            name="operation"
            value={propertyDetails.operation}
            onChange={handleChange}
            required
          >
            <option value="">Select Operation</option>
            <option value="buy">buy</option>
            <option value="rent">rent</option>
          </select>
        </div>
        

        {propertyDetails.operation === 'buy' && (
          <>
            <label>Expected Rate:</label>
            <input
              type="number"
              name="expected_rate"
              value={propertyDetails.expected_rate}
              onChange={handleChange}
              required
            />
          </>
        )}

        {propertyDetails.operation === 'rent' && (
          <>
            <label>Expected Rent:</label>
            <input
              type="number"
              name="expected_rent"
              value={propertyDetails.expected_rent}
              onChange={handleChange}
              required
            />
            <label>Expected Deposit:</label>
            <input
              type="number"
              name="expected_deposit"
              value={propertyDetails.expected_deposit}
              onChange={handleChange}
              required
            />
            <label>Preferred Tenants:</label>
            <input
              type="text"
              name="preferred_tenants"
              value={propertyDetails.preferred_tenants}
              onChange={handleChange}
              required
             />
             </>
              )}
        <div>
        <button type="submit"  >Post Property</button>
        
        </div>
      </form>
    </div>
  );
};

export default PostProperty;
