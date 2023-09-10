import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AdminPage.css"; // Import your CSS file

const AdminPage = () => {
  const navigate = useNavigate();
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);
  const userRole = sessionStorage.getItem("userRole");
  console.log(userRole)

  useEffect(() => {
    // Simulated API call to fetch property and user data
    axios
      .get("http://localhost:8585/get") // Replace with your API URL
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  useEffect(() => {
    // Simulated API call to fetch property and user data
    axios
      .get("http://localhost:8585/properties") // Replace with your API URL
      .then((response) => {
        setProperties(response.data);
      })
      .catch((error) => {
        console.error("Error fetching properties:", error);
      });
  }, []);

  const handleDeleteProperty = async (propertyId) => {
   
      try {
      await axios.delete(`http://localhost:8585/deleteproperty/${propertyId}`);
      setProperties((prevProperties) =>
        prevProperties.filter((property) => property.property_id !== propertyId)
      );
    } catch (error) {
      console.error("Error deleting property:", error);
    }
 
    
  };

  const handleDeleteUser = async (userId) => {
    // if(userRole !== 'admin'){
    try {
      await axios.delete(`http://localhost:8585/delete/${userId}`);
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.email_id !== userId)
      );
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  // }else{
  //   console.log("Admin user cannot be deleted.");
  //   alert("Admin User cannot be deleted");
  // }
  };

  const handleAccountUpdate = async (userId) => {
    navigate(`/update/${userId}`);
  };

  const handleUpdateProperty = async (propertyId) => {
    navigate(`/propertyupdate/${propertyId}`);
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>
      <div className="property-management">
        <h3>Property Management</h3>
        <ul>
          <div className="property-grid">
            {properties.map((property) => (
              <li key={property.property_Id}>
                <div className="property-card">
                  <p>Title : {property.property_name}</p>
                  <p>BHK : {property.bhk_type}</p>
                  <p>City : {property.city}</p>
                  <p>State : {property.state}</p>
                  <p>Discription :{property.description}</p>
                  <p>Furnishing : {property.furnihing_type}</p>
                  <p>Locality : {property.locality}</p>
                  <p>Listing Date : {property.listing_date}</p>
                  <p>Property Type : {property.property_type}</p>
                  <div className="property-button">
                    <button
                      onClick={() => handleDeleteProperty(property.property_id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="property-button">
                    <button
                      onClick={() => handleUpdateProperty(property.property_id)}
                    >
                      Update
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
      <div className="user-management">
        <h3>User Management</h3>
        <ul>
          <div className="property-grid">
            {users.map((user) => (
              <li key={user.email_id}>
                <div className="property-card">
                  <p>First Name : {user.first_name}</p>
                  <p>Last Name {user.last_name}</p>
                  <p>Email : {user.email_id}</p>
                  <p>Contact : {user.contact}</p>
                  <p>Address : {user.address}</p>

                  <div className="property-button">
                    <button onClick={() => handleDeleteUser(user.email_id)}>
                      Delete
                    </button>
                  </div>
                  <div className="property-button">
                    <button onClick={() => handleAccountUpdate(user.email_id)}>
                      Update
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
