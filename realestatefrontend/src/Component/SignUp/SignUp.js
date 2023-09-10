import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";
import axios from "axios";
import Swal from "sweetalert2"; // Import SweetAlert2
import "react-toastify/dist/ReactToastify.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Add validation for form fields
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !contact ||
      !address ||
      !role
    ) {
      Swal.fire("Error", "Please fill in all fields", "error"); // SweetAlert2 for empty fields
      return;
    }

    if (password.length < 8) {
      Swal.fire("Error", "Password must be at least 8 characters long", "error"); // SweetAlert2 for short password
      return;
    }

    if (
      !/^[a-zA-Z0-9]+@(gmail\.com|yahoo\.com|outlook\.com|hotmail\.com)$/.test(
        email
      )
    ) {
      Swal.fire(
        "Error",
        "Please enter a valid email address from a popular email provider (Gmail, Yahoo, Outlook, or Hotmail)",
        "error"
      ); // SweetAlert2 for invalid email
      return;
    }

    if (!/^\d{10}$/.test(contact)) {
      Swal.fire("Error", "Please enter a valid contact number", "error"); // SweetAlert2 for invalid contact
      return;
    }
    
    if (address.length < 10) {
      Swal.fire("Error", "Please Enter Detail Address ", "error"); // SweetAlert2 for short password
      return;
    }

    const newUser = {
      first_name: firstName,
      last_name: lastName,
      email_id: email,
      password: password,
      contact: contact,
      address: address,
      role: role,
    };

    try {
      await axios.post("http://localhost:8585/register", newUser);
      Swal.fire("Success", "You are registered!", "success"); // SweetAlert2 for successful registration
      await axios.post("http://localhost:8585/send-email", {
  
                      "to":email,
                      "subject": "4S Events",
                       "body": "This is a test email sent from the application."
          
      });
  
      clearFormFields();
    } catch (error) {
      console.error("Registration error:", error);
      Swal.fire("Error", "Registration failed. Please try again.", "error"); // SweetAlert2 for registration error
    }

    navigate("/signin");
  };

  const clearFormFields = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
    setContact("");
    setAddress("");
    setRole("");
  };

  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Role</label>
          <select
            name="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="owner">Owner</option>
            <option value="user">User</option>
          </select>

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
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
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
            minLength="1"
            maxLength="255"
          />
        </div>
        <button className="signup-button" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignUp;













// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./SignUp.css";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const SignUp = () => {
//   const navigate = useNavigate();
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [contact, setContact] = useState("");
//   const [address, setAddress] = useState("");
//   const [role, setRole] = useState("");

//   const notify = () => toast("Please Enter!");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Add validation for form fields
//     if (
//       !firstName ||
//       !lastName ||
//       !email ||
//       !password ||
//       !contact ||
//       !address ||
//       !role
//     ) {
//       window.alert("Please fill in all fields");
//       return;
//     }

//     if (password.length < 8) {
//       window.alert("Password must be at least 8 characters long");
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

//     const newUser = {
//       first_name: firstName,
//       last_name: lastName,
//       email_id: email,
//       password: password,
//       contact: contact,
//       address: address,
//       role: role,
//     };

//     try {
//       await axios.post("http://localhost:8585/register", newUser);
//       window.alert("You are registered!");
//       clearFormFields();
//     } catch (error) {
//       console.error("Registration error:", error);
//       window.alert("Registration failed. Please try again.");
//     }

//     navigate("/signin");
//   };

//   const clearFormFields = () => {
//     setFirstName("");
//     setLastName("");
//     setEmail("");
//     setPassword("");
//     setContact("");
//     setAddress("");
//     setRole("");
//   };

//   return (
//     <div className="sign-up">
//       <h1>Sign Up</h1>
//       <form onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Role</label>
//           <select
//             name="role"
//             value={role}
//             onChange={(e) => setRole(e.target.value)}
//           >
//             <option value="">Select Role</option>
//             <option value="owner">Owner</option>
//             <option value="user">User</option>
//           </select>

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
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
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
//             minLength="1"
//             maxLength="255"
//           />
//         </div>
//         <button className="signup-button" onClick={notify}>
//           Sign Up
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUp;

// // import React, { useState } from 'react';
// // import { useNavigate } from 'react-router-dom';
// // import './SignUp.css';
// // import axios from 'axios';
// // import {  toast } from 'react-toastify';
// // import 'react-toastify/dist/ReactToastify.css';

// // const SignUp = () => {
// //   const navigate = useNavigate();
// //   const [firstName, setFirstName] = useState('');
// //   const [lastName, setLastName] = useState('');
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');
// //   const [contact, setContact] = useState('');
// //   const [address, setAddress] = useState('');
// //   const [role, setRole] = useState('');

// //   const notify = () => toast("Please Enter!");

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const newUser = {
// //       first_name: firstName,
// //       last_name: lastName,
// //       email_id: email,
// //       password: password,
// //       contact: contact,
// //       address: address,
// //       role: role
// //     };

// //     try {
// //       await axios.post('http://localhost:8585/register', newUser);
// //       window.alert('You are registered!');
// //       clearFormFields();
// //     } catch (error) {
// //       console.error('Registration error:', error);
// //       window.alert('Registration failed. Please try again.');
// //     }

// //     navigate('/signin');
// //   };

// //   const clearFormFields = () => {
// //     setFirstName('');
// //     setLastName('');
// //     setEmail('');
// //     setPassword('');
// //     setContact('');
// //     setAddress('');
// //     setRole('');
// //   };

// //   return (

// //     <div className="sign-up">
// //       <h1>Sign Up</h1>
// //       <form onSubmit={handleSubmit}>
// //         <div className="form-group">
// //         <label>Role</label>
// //         <select
// //           name="role"
// //           value={role}
// //           onChange={(e) => setRole(e.target.value)}
// //         >
// //           <option value="">Select Role</option>
// //           <option value="owner">Owner</option>
// //           <option value="user">User</option>
// //         </select>

// //           <label>First Name:</label>
// //           <input
// //             type="text"
// //             value={firstName}
// //             onChange={(e) => setFirstName(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Last Name:</label>
// //           <input
// //             type="text"
// //             value={lastName}
// //             onChange={(e) => setLastName(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Contact:</label>
// //           <input
// //             type="tel"
// //             value={contact}
// //             onChange={(e) => setContact(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <div className="form-group">
// //           <label>Address:</label>
// //           <input
// //             type="text"
// //             value={address}
// //             onChange={(e) => setAddress(e.target.value)}
// //             required
// //           />
// //         </div>
// //         <button className="signup-button" onClick={notify}>Sign Up</button>

// //       </form>
// //     </div>
// //   );
// // };

// // export default SignUp;
