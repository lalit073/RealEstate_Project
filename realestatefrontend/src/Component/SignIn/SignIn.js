import React, { useState } from 'react';
import './SignIn.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const SignIn = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async (event) => {
    event.preventDefault();

    // Add validation for username and password
    if (!username || !password) {
      setErrorMessage('Please enter a username and password');
      return;
    }

    if (password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long');
      return;
    }

    try {
      const response = await axios.post('http://localhost:8585/login', {
        "email_id":username,
        "password":password,
      });

      if (response.data) {
        console.log('Login successful:', response.data);
        // Handle successful login, such as storing tokens or redirecting to a dashboard
          // Assuming response.data contains the user's role information (consumer, owner, admin)
         
        
          if (response.data.role === "user") {
            // Navigate to the home page for consumers
            const userId = response.data.email_id;
            const userRole=response.data.role;
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('userRole', userRole); 
            navigate("/");
          } else if (response.data.role === "owner") {
            // Navigate to the owner dashboard
            const userId = response.data.email_id;
            const userRole=response.data.role;
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('userRole', userRole); 
            navigate("/owner");
          } else if (response.data.role === "admin") {
            // Navigate to the admin dashboard
            const userId = response.data.email_id;
            const userRole=response.data.role;
            sessionStorage.setItem('loggedIn', 'true');
            sessionStorage.setItem('userId', userId);
            sessionStorage.setItem('userRole', userRole); 
            navigate("/admin");
          }
      } else {
        setErrorMessage('Invalid username or password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred while logging in');
    }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password")
    console.log('Forgot password clicked');
  };

  return (
    <div className="signin-container">
      <form className="signin-form" onSubmit={handleSignIn}>
        <h1>Sign In</h1>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            placeholder='Enter Email'
            id="username"
            value={username}
            onChange={handleUsernameChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder='Enter Password'
            id="password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Sign In</button>
        <button type="button" onClick={handleForgotPassword}>
          Forgot Password
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>
    </div>
  );
};

export default SignIn;


// import React, { useState } from 'react';
// import './SignIn.css';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');


//   const handleUsernameChange = (event) => {
//     // console.log(event.target.value);
//     setUsername(event.target.value);
//   };

//   const handlePasswordChange = (event) => {
//     // console.log(event.target.value);
//     setPassword(event.target.value);
//   };

//   const handleSignIn = async (event) => {
//     event.preventDefault();
 
//   //  console.log(username);
//   //  console.log(password);

//     try {
//       const response = await axios.post('http://localhost:8585/login', {
//         "email_id":username,
//         "password":password,
//       });

     

//       if (response.data) {
//         console.log('Login successful:', response.data);
//         // Handle successful login, such as storing tokens or redirecting to a dashboard
//           // Assuming response.data contains the user's role information (consumer, owner, admin)
         
        
//           if (response.data.role === "user") {
//             // Navigate to the home page for consumers
//             const userId = response.data.email_id;
//             const userRole=response.data.role;
//             sessionStorage.setItem('loggedIn', 'true');
//             sessionStorage.setItem('userId', userId);
//             sessionStorage.setItem('userRole', userRole); 
//             navigate("/");
//           } else if (response.data.role === "owner") {
//             // Navigate to the owner dashboard
//             const userId = response.data.email_id;
//             const userRole=response.data.role;
//             sessionStorage.setItem('loggedIn', 'true');
//             sessionStorage.setItem('userId', userId);
//             sessionStorage.setItem('userRole', userRole); 
//             navigate("/owner");
//           } else if (response.data.role === "admin") {
//             // Navigate to the admin dashboard
//             const userId = response.data.email_id;
//             const userRole=response.data.role;
//             sessionStorage.setItem('loggedIn', 'true');
//             sessionStorage.setItem('userId', userId);
//             sessionStorage.setItem('userRole', userRole); 
//             navigate("/admin");
//           }
//       } else {
//         setErrorMessage('Invalid username or password');
//       }
//     } catch (error) {
//       console.error('Login error:', error);
//       setErrorMessage('An error occurred while logging in');
//     }
//   };

//   const handleForgotPassword = () => {
//     navigate("/forgot-password")
//     console.log('Forgot password clicked');
//   };

//   return (
//     <div className="signin-container">
//       <form className="signin-form" onSubmit={handleSignIn}>
//         <h1>Sign In</h1>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={handleUsernameChange}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={handlePasswordChange}
//           />
//         </div>
//         <button type="submit">Sign In</button>
//         <button type="button" onClick={handleForgotPassword}>
//           Forgot Password
//         </button>
//         {errorMessage && <p className="error-message">{errorMessage}</p>}
//       </form>
//     </div>
//   );
// };

// export default SignIn;
