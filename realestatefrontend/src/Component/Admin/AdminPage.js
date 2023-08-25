import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './AdminPage.css'; // Import your CSS file

const AdminPage = () => {
  const [properties, setProperties] = useState([]);
  const [users, setUsers] = useState([]);

 
  useEffect(() => {
    // Simulated API call to fetch property and user data
    axios.get('http://localhost:8585/get') // Replace with your API URL
    .then(response => {
      setUsers(response.data);
    })
    .catch(error => {
      console.error('Error fetching properties:', error);
    });
    
  }, []);


  useEffect(() => {
    // Simulated API call to fetch property and user data
    axios.get('http://localhost:8585/properties') // Replace with your API URL
    .then(response => {
      setProperties(response.data);
    })
    .catch(error => {
      console.error('Error fetching properties:', error);
    });
    
  }, []);

  const handleDeleteProperty = (propertyId) => {
    // Implement property deletion logic
    console.log('Delete property:', propertyId);
  };

  const handleDeleteUser = (userId) => {
    // Implement user deletion logic
    console.log('Delete user:', userId);
  };

  return (
    <div className="admin-page">
      <h2>Admin Panel</h2>
      <div className="property-management">
        <h3>Property Management</h3>
        <ul>
          {properties.map((property) => (
            <li key={property.id}>
              {property.title} - {property.location}
              <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="user-management">
        <h3>User Management</h3>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} ({user.email})
              <button onClick={() => handleDeleteUser(user.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
