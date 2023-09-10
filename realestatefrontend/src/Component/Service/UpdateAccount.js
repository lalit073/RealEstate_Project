import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Swal from 'sweetalert2'; // Import SweetAlert


const UpdateAccount = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [address, setAddress] = useState('');
  const [role, setRole] = useState('');

  useEffect(() => {
    // Fetch user data based on userId
    axios.get(`http://localhost:8585/get`)
      .then(response => {
        const userData = response.data.find(user => user.email_id === userId);
        if (userData) {
          setUser(userData);
          setFirstName(userData.first_name);
          setLastName(userData.last_name);
          setEmail(userData.email_id);
          setContact(userData.contact);
          setAddress(userData.address);
          setRole(userData.role);
        } else {
          console.error('User not found');
        }
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
      });
  }, [userId]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !firstName ||
      !lastName ||
      !email ||
      !contact ||
      !address ||
      !role
    ) {
      Swal.fire('Error', 'Please fill in all fields', 'error'); // SweetAlert for empty fields
      return;
    }

    if (
      !/^[a-zA-Z0-9]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/.test(
        email
      )
    ) {
      Swal.fire(
        'Error',
        'Please enter a valid email address from a popular email provider (Gmail, Yahoo, Outlook, or Hotmail)',
        'error'
      ); // SweetAlert for invalid email
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      Swal.fire('Error', 'Please enter a valid contact number', 'error'); // SweetAlert for invalid contact
      return;
    }

    const updatedUser = {
      first_name: firstName,
      last_name: lastName,
      email_id: email,
      contact: contact,
      address: address,
      role: role
    };

    try {
      await axios.put(`http://localhost:8585/update/${userId}`, updatedUser);
      Swal.fire('Success', 'User information updated successfully', 'success');
      navigate('/admin'); // Redirect to admin page after successful update
    } catch (error) {
      console.error('Update error:', error);
      Swal.fire(
        'Error',
        'Failed to update user information. Please try again.',
        'error'
      );
    }
  };

  return (
    <div className="update-account">
      <h2>Update User Account</h2>
      {user ? (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
        {/* <label>Role</label>
        <select
          name="role"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="">Select Role</option>
          <option value="owner">Owner</option>
          <option value="user">User</option>
        </select> */}
         
          <label>First Name:</label>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Last Name:</label>
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        {/* <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div> */}
        <div className="form-group">
          <label>Contact:</label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
          />
        </div>
          {/* Your input fields for user data */}
          <button type="submit">Update User</button>
        </form>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  );
};

export default UpdateAccount;


// import React, { useState, useEffect } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const UpdateAccount = () => {
//   const navigate = useNavigate();
//   const { userId } = useParams();
//   const [user, setUser] = useState(null);
//   const [firstName, setFirstName] = useState('');
//   const [lastName, setLastName] = useState('');
//   const [email, setEmail] = useState('');
//   const [contact, setContact] = useState('');
//   const [address, setAddress] = useState('');
//   const [role, setRole] = useState('');

//   useEffect(() => {
//     // Fetch user data based on userId
//     axios.get(`http://localhost:8585/get`)
//       .then(response => {
//         const userData = response.data.find(user => user.email_id === userId);
//         if (userData) {
//           setUser(userData);
//           setFirstName(userData.first_name);
//           setLastName(userData.last_name);
//           setEmail(userData.email_id);
//           setContact(userData.contact);
//           setAddress(userData.address);
//           setRole(userData.role);
//         } else {
//           console.error('User not found');
//         }
//       })
//       .catch(error => {
//         console.error('Error fetching user data:', error);
//       });
//   }, [userId]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (
//       !firstName ||
//       !lastName ||
//       !email ||
//       !contact ||
//       !address ||
//       !role
//     ) {
//       window.alert("Please fill in all fields");
//       return;
//     }

//     if (
//       !/^[a-zA-Z0-9]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/.test(
//         email
//       )
//     ) {
//       window.alert(
//         "Please enter a valid email address from a popular email provider (Gmail, Yahoo, Outlook, or Hotmail)"
//       );
//       return;
//     }

//     if (!/^\d{10}$/.test(contact)) {
//       window.alert("Please enter a valid contact number");
//       return;
//     }

//     const updatedUser = {
//       first_name: firstName,
//       last_name: lastName,
//       email_id: email,
//       contact: contact,
//       address: address,
//       role: role
//     };

//     try {
//       await axios.put(`http://localhost:8585/update/${userId}`, updatedUser);
//       toast.success('User information updated successfully');
//       navigate('/admin'); // Redirect to admin page after successful update
//     } catch (error) {
//       console.error('Update error:', error);
//       toast.error('Failed to update user information. Please try again.');
//     }
//   };

//   return (
//     <div className="update-account">
//       <h2>Update User Account</h2>
//       {user ? (
//         <form onSubmit={handleSubmit}>
//             <div className="form-group">
//         {/* <label>Role</label>
//         <select
//           name="role"
//           value={role}
//           onChange={(e) => setRole(e.target.value)}
//         >
//           <option value="">Select Role</option>
//           <option value="owner">Owner</option>
//           <option value="user">User</option>
//         </select> */}
         
//           <label>First Name:</label>
//           <input
//             type="text"
//             value={firstName}
//             onChange={(e) => setFirstName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Last Name:</label>
//           <input
//             type="text"
//             value={lastName}
//             onChange={(e) => setLastName(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         {/* <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div> */}
//         <div className="form-group">
//           <label>Contact:</label>
//           <input
//             type="tel"
//             value={contact}
//             onChange={(e) => setContact(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Address:</label>
//           <input
//             type="text"
//             value={address}
//             onChange={(e) => setAddress(e.target.value)}
//             required
//           />
//         </div>
//           {/* Your input fields for user data */}
//           <button type="submit">Update User</button>
//         </form>
//       ) : (
//         <p>Loading user data...</p>
//       )}
//     </div>
//   );
// };

// export default UpdateAccount;
