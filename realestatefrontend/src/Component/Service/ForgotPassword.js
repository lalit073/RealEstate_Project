import React, { useState } from 'react';
import axios from 'axios';
import './ForgotPassword.css'; // Import your CSS file
import Swal from 'sweetalert2'; 


function ForgotPassword() {
    const [email_id, setEmailId] = useState('');
    const [first_name, setFirstName] = useState('');
    const [password, setNewPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleResetPassword = async () => {
      if (password.length < 8) {
          Swal.fire('Error', 'Password must be at least 8 characters long', 'error');
          return;
      }

      if (password !== confirmpassword) {
          Swal.fire('Error', 'Passwords do not match', 'error');
          return;
      }

      const resetData = { email_id, first_name, password };

      try {
          const response = await axios.post('http://localhost:8585/reset-password', resetData);

          if (response.status === 200) {
              Swal.fire('Success', 'Password reset successful', 'success');
          } else if (response.status === 400) {
              Swal.fire('Error', 'Email and/or first name mismatched', 'error');
          } else {
              Swal.fire('Error', 'Password reset failed', 'error');
          }
      } catch (error) {
          Swal.fire('Error', 'An error occurred', 'error');
      }
    };

    return (
        <div className="forgot-password-container">
            <div className="forgot-password-form">
                <h2>Forgot Password</h2>
                <div className="form-group">
                    {/* <label>Email</label> */}
                    <input
                        type="text"
                        placeholder="Email"
                        value={email_id}
                        onChange={(e) => setEmailId(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {/* <label>First Name</label> */}
                    <input
                        type="text"
                        placeholder="First Name"
                        value={first_name}
                        onChange={(e) => setFirstName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {/* <label>New Password</label> */}
                    <input
                        type="password"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {/* <label>Confirm Password</label> */}
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        value={confirmpassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                </div>
                <div>
                    <button className="reset-button" onClick={handleResetPassword}>
                        Reset Password
                    </button>
                </div>
                <div>{message}</div>
            </div>
        </div>
    );
}

export default ForgotPassword;


































// import React, { useState } from 'react';
// import axios from 'axios';
// import Swal from 'sweetalert2';
// import './ForgotPassword.css'; // Import your CSS file for styling

// const ForgotPassword = () => {
//   const [email, setEmail] = useState('');
  
//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const data = {
//             "to": email,
//             "subject": "4S Events",
//             "body": "This is a test email sent from the application."
//         };

//         try {
//             const response = await axios.post('http://localhost:8585/send-email', data);

//             if (response.data !== null) {
//                 console.log('Email sent:', response.data);
//                 // alert("Email Sent")
//                 Swal.fire({
//                     icon: 'success',
//                     title: 'Email Sent',
//                     text: 'Please check the email to get the password'
//                 }); setTimeout(() => {
//                     window.location.href = '/signin';
//                 }, 2000);
//             }
//             else {
//                 alert("Email not found")
//             }

//         } catch (error) {
//             console.error('Error sending email:', error);
//         }
//       }

//   return (
//     <div className="forgot-password-container">
//       <form className="forgot-password-form" onSubmit={handleSubmit}>
//         <h2>Forgot Password</h2>
//         <div className="form-group">
//           <label>Email</label>
//           <input
//             type="text"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         {/* <div className="form-group">
//           <label>New Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label>Confirm Password</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//             required
//           />
//         </div> */}
//         <button type="submit" className="reset-button">Reset Password</button>
//       </form>
//     </div>
//   );
// };

// export default ForgotPassword;
