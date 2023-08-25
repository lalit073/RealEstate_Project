import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import axios from 'axios';
import './OwnerDashboard.css'; // Import your CSS file

const OwnerDashboard = () => {
  const [ownedProperties, setOwnedProperties] = useState([]);
  useEffect(() => {
    // Fetch properties from the Spring Boot API
    axios.get('http://localhost:8585/properties') // Replace with your API URL
      .then(response => {
        setOwnedProperties(response.data);
      })
      .catch(error => {
        console.error('Error fetching properties:', error);
      });
  }, []);
 

  const handleDeleteProperty = (propertyId) => {
    // Implement property deletion logic
    try {
      axios.delete(`http://localhost:8585/deleteproperty/${propertyId}`); // Replace with your DELETE API endpoint
        ownedProperties(); // Fetch updated properties after deletion
    } catch (error) {
      console.error('Error deleting property:', error);
    }
    const updatedProperties = ownedProperties.filter(property => property.id !== propertyId);
    setOwnedProperties(updatedProperties);
  };

  const handleUpdateProperty = (propertyId) => {
    try {
      const updatedProperty = /* create updated property object with new data */
       axios.put(`http://localhost:8585/propertyupdate/${propertyId}`, updatedProperty); // Replace with your PUT API endpoint
      ownedProperties(); // Fetch updated properties after update
    } catch (error) {
      console.error('Error updating property:', error);
    }
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
              <button onClick={() => handleDeleteProperty(property.id)}>Delete</button>
              <button onClick={() => handleUpdateProperty(property.id)}>Update</button>
            </li>
          ))}
        </ul>
      </div>
      <div className="add-property-button">
        <Link to="/postproperty">
          <button>Add/Post Property</button>
        </Link>
      </div>
    </div>
  );
};

export default OwnerDashboard;





































// import React, { useState, useEffect } from 'react';
// import './OwnerDashboard.css'; // Import your CSS file

// const OwnerDashboard = () => {
//   const [ownedProperties, setOwnedProperties] = useState([]);
//   const [propertyTitle, setPropertyTitle] = useState('');
//   const [propertyLocation, setPropertyLocation] = useState('');

//   // Simulated data, replace with actual data from your API or database
//   const mockOwnedProperties = [
//     { id: 1, title: 'Beautiful House', location: 'City A, State B' },
//     { id: 2, title: 'Luxury Apartment', location: 'City X, State Y' },
//     // ... add more properties
//   ];

//   useEffect(() => {
//     // Simulated API call to fetch owned property data
//     setOwnedProperties(mockOwnedProperties);
//   }, []);

//   const handleAddProperty = () => {
//     // Implement property addition logic
//     const newProperty = {
//       id: ownedProperties.length + 1,
//       title: propertyTitle,
//       location: propertyLocation
//     };
//     setOwnedProperties([...ownedProperties, newProperty]);
//     setPropertyTitle('');
//     setPropertyLocation('');
//   };

//   return (
//     <div className="owner-dashboard">
//       <h2>Owner Dashboard</h2>
//       <div className="owned-properties">
//         <h3>Your Posted Properties</h3>
//         <ul>
//           {ownedProperties.map((property) => (
//             <li key={property.id}>
//               {property.title} - {property.location}
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div className="add-property">
//         <h3>Add New Property</h3>
//         <div className="form-group">
//           <label>Title:</label>
//           <input
//             type="text"
//             value={propertyTitle}
//             onChange={(e) => setPropertyTitle(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label>Location:</label>
//           <input
//             type="text"
//             value={propertyLocation}
//             onChange={(e) => setPropertyLocation(e.target.value)}
//           />
//         </div>
//         <button onClick={handleAddProperty}>Add Property</button>
//       </div>
//     </div>
//   );
// };

// export default OwnerDashboard;
